# SlotTableModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SlotTableModule`** extends `SlotBaseModule`

## CC Properties
- `table`
- `reelPrefab`
- `symbolManager`

## Key Methods
- `onLoadExtend(): void`
- `getConfigValue(): void`
- `registerEvents(): void`
- `initTable(): void`
- `syncTable(): void`
- `mapResumeMatrix(): void`
- `removeAllSymbols(): void`
- `startSpin(): void`
- `stopSpin(): Promise<void>`
- `stopSpinWithRandomMatrix(): Promise<void>`
- `resetAllEffectAndTasks(): void`
- `fastStop(): void`
- `isFastToResult(): boolean`
- `hideSymbolsOnReel(): void`
- `getSymbolByColRow(): cc.Node`

## Source Implementation
```typescript
const { _decorator, instantiate, warn } = cc;
import { GameConfig } from "../../../../Core/GameConfig";
import { SlotBaseModule } from "../../../../Core/SlotBaseModule";
import { SlotSymbolManager } from "../../../Table/SlotSymbol/SlotSymbolManager";
import { SlotSymbolModule } from "../../../Table/SlotSymbol/SlotSymbolModule";
import { IReelComponent, SlotReelModule } from "./SlotReelModule";
import { SlotTableData } from "./SlotTableData";
import { TableModuleEvents, TableSpinState } from "./SlotTableModuleEnum";
import { TableModuleConfig } from "./TableModuleConfig";
import { SlotGameSettings } from "../../../../Core/SlotGameSettings";
import { HelpDocuments } from "../../../../Components/Common/HelpDocuments";
const { ccclass, property, help } = _decorator;
const { inject } = eno;

@ccclass
@help(HelpDocuments.SLOT_TABLE_MODULE)
export class SlotTableModule extends SlotBaseModule {
	@property(cc.Node) table: cc.Node = null;
	@property(cc.Prefab) reelPrefab: cc.Prefab = null;
	@property(SlotSymbolManager) symbolManager: SlotSymbolManager = null;
	@inject(GameConfig) gameConfig: GameConfig;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;
	//declare constant value from config
	protected TOTAL_COLS: number;
	protected SYMBOL_WIDTH: number;
	protected START_X: number;

	protected state: TableSpinState = TableSpinState.READY;

	protected reelCount = 0;
	protected currentMode;
	protected _matrix: string[][] = [];
	protected _lastMatrix: string[][] = [];
	protected _tableStopCB: Function = null;

	protected config: TableModuleConfig;
	protected _slotTableData: SlotTableData;
	protected reels: (cc.Component & IReelComponent)[] = [];

	onLoadExtend(): void {
		this.config = this.getComponent(TableModuleConfig);
		if (!this.config) {
			warn('Config not add to this node');
			return;
		}
		this.getConfigValue();
		this._slotTableData = this.getComponent(SlotTableData);

		if (!this.symbolManager) {
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}
		this.symbolManager.setGameConfig(this.gameConfig);
	}

	protected getConfigValue(): void {
		this.TOTAL_COLS = this.config.TABLE_FORMAT.length;
		this.SYMBOL_WIDTH = this.config.SYMBOL_WIDTH;
	}

	protected registerEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on(TableModuleEvents.TABLE_INIT, this.initTable, this);
			this.moduleEvent.on(TableModuleEvents.TABLE_START_SPIN, this.startSpin, this);
			this.moduleEvent.on(TableModuleEvents.TABLE_STOP_SPIN, this.stopSpin, this);
			this.moduleEvent.on(TableModuleEvents.TABLE_FAST_STOP, this.fastStop, this);
			this.moduleEvent.on(TableModuleEvents.SHOW_BEAUTY_MATRIX, this.showBeautyMatrix, this);
			this.moduleEvent.on(TableModuleEvents.SYNC_TABLE, this.syncTable, this);
			this.moduleEvent.on(TableModuleEvents.TABLE_STOP_SPIN_WITH_RANDOM_MATRIX, this.stopSpinWithRandomMatrix, this);

			this.moduleEvent.on(TableModuleEvents.HIDE_SYMBOLS_ON_REEL, this.hideSymbolsOnReel, this);
		}
	}

	initTable(): void {
		this.START_X = -(this.TOTAL_COLS / 2 - 0.5) * this.SYMBOL_WIDTH;
		for (let col = 0; col < this.TOTAL_COLS; col++) {
			const reelNode = this.createReelNode(col);
			const reelComponent = reelNode.getComponent(SlotReelModule);
			reelComponent.initReel({ reelIndex: col, config: this.config, pool: this.symbolManager });
			this.reels.push(reelComponent);
		}
	}

	syncTable(matrix?: string[][], gameMode?: number): void {
		this._matrix = matrix || this._slotTableData.getResumeMatrix(gameMode);
		if (!this._matrix || !this._matrix.length) {
			return;
		}
		// remove all symbols one time, be careful if other module is using symbols
		this.removeAllSymbols();
		this.table.active = true;
		this.mapResumeMatrix();
		this._lastMatrix = [...this._matrix];
		this.reels.forEach((reelComponent, index) => {
			const reelData = [...this._matrix[index]];
			reelComponent.clearSymbols();
			reelComponent.resumeReel(reelData);
		});
	}

	mapResumeMatrix(): void {
		// TODO: override this method to map resume matrix
		// For example: after symbol A transform to B, we need to map last matrix.
	}

	removeAllSymbols(): void {
		this.symbolManager.removeAllSymbols();
	}

	startSpin(): void {
		if (this.state === TableSpinState.READY || this.state === TableSpinState.STOPPED) {
			this.onChangeState(TableSpinState.START);
			this.table.active = true;

			this.currentMode = this.gameSettings.isTurboActive ? this.config.MODES.TURBO : this.config.MODES.NORMAL;
			this.reelCount = 0;
			this.reels.forEach((reelComponent) => {
				reelComponent.runReelSpin(this.currentMode);
			});

			this.config.NEAR_WIN_DELAY_STOP = 0;
			this.node.emit("START_SPIN");
			this.node.emit("RESET_NEARWIN");
			this.node.emit('REEL_START_SOUND', { context: this });
		}
	}

	stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void> {
		this._matrix = matrix || this._slotTableData.getMatrix();

		this._lastMatrix = [...this._matrix];
		this.onChangeState(TableSpinState.SHOWING_RESULT);

		//fire event to extends logic on stop spining step
		this.node.emit("PROCESS_BEFORE_STOP_REELS", { mode: this.currentMode, context: this });

		this.reels.forEach((reelComponent, index) => {
			const reelData = [...this._matrix[index]];
			reelComponent.showResult(reelData, this.onReelStop.bind(this), this.onReelPreStop.bind(this));
		});

		this.node.emit("SETUP_NEARWIN", { matrix: this._matrix, isTurboActive: this.currentMode.isTurbo, context: this });

		return new Promise((resolve) => {
			this._tableStopCB = resolve;
		});
	}

	stopSpinWithRandomMatrix(): Promise<void> {
		if (this.state === TableSpinState.SHOWING_RESULT) {
			return new Promise((resolve) => {
				this.fastStop();
				this._tableStopCB = resolve;
			});
		}
		if (this.state !== TableSpinState.START) {
			return Promise.resolve();
		}
		let randomMatrix = [...this.config.getRandomMatrix()];
		return new Promise((resolve) => {
			this.stopSpin(randomMatrix, true).then(() => {
				resolve() 
			});
			this.fastStop();
		});
	}

	protected resetAllEffectAndTasks(): void {
		this.stopSpinWithRandomMatrix();
	}

	fastStop(): void {
		if (this.state === TableSpinState.STOPPING_IMMEDIATELY || this.state !== TableSpinState.SHOWING_RESULT) {
			return;
		}

		this.onChangeState(TableSpinState.STOPPING_IMMEDIATELY);
		this.reels.forEach((reelComponent) => {
			reelComponent.fastStop();
		});
	}

	isFastToResult(): boolean {
		return this.state === TableSpinState.STOPPING_IMMEDIATELY;
	}

	hideSymbolsOnReel(col: number): void {
		this.reels[col].node.active = false;
	}

	getSymbolByColRow(col: number, row: number): cc.Node {
		if (!this.reels[col]) {
			return null;
		}
		return this.reels[col].getSymbolByRow(row);
	}

	getSymbolByCol(col: number): cc.Node[] {
		if (!this.reels[col]) {
			return null;
		}
		return this.reels[col].getRealSymbols();
	}

	showBeautyMatrix(): void {
		if (!this.config.BEAUTY_MATRIX || !this.config.BEAUTY_MATRIX.length) {
			return;
		}
		let beautyMatrix = [...this.config.getRandomBeautyMatrix()];

		this.syncTable(beautyMatrix);
		this.reels.forEach(reelComponent => {
			const symbols = reelComponent.getRealSymbols();
			symbols.forEach(symbol => {
				const symbolComp = SlotSymbolModule.getModuleComponent(symbol);
				symbolComp.playSymbolIntro(symbolComp.symbolCode);
			});
		});
	}

	protected unregisterEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.targetOff(this);
		}
	}

	onDestroy(): void {
		this.unregisterEvents();
	}

	/* ============== ALL REELS ================== */

	protected createReelNode(col: number): cc.Node {
		const node = instantiate(this.reelPrefab);
		node.name = `Reel_${col}`;
		node.setPosition(this.START_X + col * this.SYMBOL_WIDTH, 0);
		node.setParent(this.table);
		return node;
	}

	protected onReelStop(reelIndex: number): void {
		this.onReelStopExtend(reelIndex);
		if (this.moduleEvent) {
			this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.reels[this.reelCount].getResultSymbols());
		}
		this.reelCount++;
		this.node.emit('REEL_STOP_NEARWIN', { reelCount: this.reelCount, context: this });
		if (this.reelCount >= this.reels.length) {
			this.onChangeState(TableSpinState.STOPPED);
			this._tableStopCB && this._tableStopCB();
			this._tableStopCB = null;
		}
	}

	protected onReelPreStop(reelIndex: number): void {
		this.node.emit('REEL_STOP_SOUND', { reelIndex, context: this, matrix: this._matrix });
		this.node.emit('PRE_REEL_STOP_NEARWIN', { reelCount: reelIndex + 1, context: this });
		this.onReelPreStopExtend(reelIndex);
	}

	protected onChangeState(state: TableSpinState): void {
		this.state = state;
		this.onChangeStateExtend(state);
	}

	protected onChangeStateExtend(_state: TableSpinState): void {
		// override this method to handle table event.
	}

	protected onReelStopExtend(_reelIndex: number): void {
		// override this method to handle reel stop event
	}

	protected onReelPreStopExtend(_reelIndex: number): void {
		// override this method to handle reel stop event, before reel easing
	}
}

```
