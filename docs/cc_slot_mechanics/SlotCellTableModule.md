# SlotCellTableModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/SlotCellTableModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`SlotCellTableModule`** extends `SlotTableModule`

## Key Methods
- `onLoadExtend(): void`
- `getConfigValue(): void`
- `syncTable(): void`
- `initTable(): void`
- `startSpin(): void`
- `stopSpin(): Promise<void>`
- `reelStop(): void`
- `reelPreStop(): void`
- `initListMaskRow(): void`
- `initListReel(): void`
- `showBeautyMatrix(): void`

## Source Implementation
```typescript
const { _decorator, Mask, Node, warn } = cc;
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
import { SlotSymbolManager, SlotSymbolModule, SlotTableModule, TableSpinState } from '../../../cc-slot-module/SlotModuleExport';
import { CellReelModule } from './CellReelModule';
import { CellTableConfig } from './CellTableConfig';
import { CellTableData } from './CellTableData';
const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.SLOT_CELL_TABLE_MODULE)
export class SlotCellTableModule extends SlotTableModule {
	protected config: CellTableConfig;
	protected _slotTableData: CellTableData;
	protected reelList: CellReelModule[][] = [];

	//declare constant value from config
	protected SYMBOL_HEIGHT: number;
	protected totalReelSpin: number
	protected totalReelStop: number;

	protected listMaskRow: cc.Node[] = [];

	protected _callbackStop: Function = null;

	onLoadExtend(): void {
		this.reelList = [];
		this.config = this.getComponent(CellTableConfig);
		if (!this.config) {
			warn('Config not add to this node');
			return;
		}
		this.getConfigValue();
		this._slotTableData = this.getComponent(CellTableData);

		if (!this.symbolManager) {
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}

		this.symbolManager.setGameConfig(this.gameConfig);
	}

	protected getConfigValue(): void {
		super.getConfigValue();
		this.SYMBOL_WIDTH = this.config.SYMBOL_WIDTH;
		this.SYMBOL_HEIGHT = this.config.SYMBOL_HEIGHT;
	}

	syncTable(matrix?: string[][], gameMode?: number): void {
		this._matrix = matrix || this._slotTableData.getResumeMatrix(gameMode);

		if (!this._matrix || !this._matrix.length) {
			return;
		}
		this.removeAllSymbols();
		this.table.active = true;
		this._lastMatrix = [...this._matrix];
		for (let col = 0; col < this.TOTAL_COLS; col++) {
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelComponent = this.reelList[col][row];
				reelComponent.clearSymbols();
				reelComponent.resumeReel([this._matrix[col][row]]);
			}
		}
	}

	initTable(): void {
		//init list mask row
		this.initListMaskRow();

		//init reels
		this.initListReel();
	}

	startSpin(): void {
		if (this.state === TableSpinState.READY || this.state === TableSpinState.STOPPED) {
			this.state = TableSpinState.START;
			this.table.active = true;

			this.currentMode = this.gameSettings.isTurboActive ? this.config.MODES.TURBO : this.config.MODES.NORMAL;
			this.totalReelSpin = 0;
			this.totalReelStop = 0;

			for (let col = 0; col < this.TOTAL_COLS; col++) {
				const totalRows = this.config.TABLE_FORMAT[col];
				for (let row = 0; row < totalRows; row++) {
					const reelComponent = this.reelList[col][row];
					this.totalReelSpin++;
					reelComponent.runReelSpin(this.currentMode);
				}
			}
		}
	}

	stopSpin(matrix?: string[][]): Promise<void> {
		this._matrix = matrix || this._slotTableData.getMatrix();

		this._lastMatrix = [...this._matrix];
		this.state = TableSpinState.SHOWING_RESULT;

		for (let col = 0; col < this.TOTAL_COLS; col++) {
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelComponent = this.reelList[col][row];
				const symbolData = this._matrix[col][row];
				reelComponent.showResult([symbolData], this.reelStop.bind(this), this.reelPreStop.bind(this));
			}
		}

		return new Promise((resolve) => {
			this._callbackStop = resolve;
		});
	}

	protected reelStop(): void {
		this.totalReelStop++;
		if (this.totalReelStop >= this.totalReelSpin) {
			this.state = TableSpinState.STOPPED;
			this._callbackStop && this._callbackStop();
			this._callbackStop = null;
		}
	}

	protected reelPreStop(): void {
		// to do
	}

	protected initListMaskRow(): void {
		this.START_X = -(this.TOTAL_COLS / 2 - 0.5) * this.SYMBOL_WIDTH;
		const totalRows = this.config.TABLE_FORMAT[0];
		const startY = (totalRows / 2 - 0.5) * this.SYMBOL_HEIGHT;
		for (let row = 0; row < totalRows; row++) {
			const node = new Node(`MaskRow_${row}`);
			node.setParent(this.table);
			node.setPosition( new cc.Vec2(0, startY - row * this.SYMBOL_HEIGHT));

			const maskSize = this.config.SYMBOL_MASK_SIZE;
			node.width = maskSize.width * this.TOTAL_COLS;
			node.height = maskSize.height;
			node.addComponent(Mask);
			// node.getComponent(Mask).type = Mask.Type.GRAPHICS_RECT;

			this.listMaskRow.push(node);
		}
	}

	initListReel(): void {
		this.START_X = -(this.TOTAL_COLS / 2 - 0.5) * this.SYMBOL_WIDTH;
		for (let col = 0; col < this.TOTAL_COLS; col++) {
			this.reelList[col] = [];
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelNode = new Node(`Reel_${col}_${row}`);
				const maskRow = this.listMaskRow[row];
				reelNode.setParent(maskRow);

				const x = this.START_X + col * this.SYMBOL_WIDTH;
				reelNode.setPosition(new cc.Vec2(x, 0));

				const reelComponent = reelNode.addComponent(CellReelModule);
				reelComponent.initReel({ reelIndex: col, config: this.config, pool: this.symbolManager, reelRow: row });
				reelComponent.hideFakeSymbols();

				this.reelList[col][row] = reelComponent;
			}
		}
	}

	showBeautyMatrix(): void {
		if (!this.config.BEAUTY_MATRIX || !this.config.BEAUTY_MATRIX.length) {
			return;
		}
		let beautyMatrix = [...this.config.getRandomBeautyMatrix()];

		this.syncTable(beautyMatrix);
		for (let col = 0; col < this.TOTAL_COLS; col++) {
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelComponent = this.reelList[col][row];
				reelComponent.hideFakeSymbols();
				const symbols = reelComponent.getRealSymbols();
				symbols.forEach(symbol => {
					const symbolComp = SlotSymbolModule.getModuleComponent(symbol);
					symbolComp.playSymbolIntro(symbolComp.symbolCode);
				});
			}
		}
	}
}


```
