# VerticalCascadeModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/CascadeModule/scripts/VerticalCascadeModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`VerticalCascadeModule`** extends `SlotBaseModule`

## CC Properties
- `container`
- `symbolManager`

## Key Methods
- `onLoadExtend(): void`
- `getConfig(): CascadeModuleConfig`
- `registerEvents(): void`
- `initLayout(): void`
- `resetSymbolList(): void`
- `updateLatestMatrix(): void`
- `startRespin(): void`
- `stopRespin(): Promise<void>`
- `resetAllEffectAndTasks(): void`
- `stopRespinWithNearwin(): Promise<void>`
- `preparingSymbols(): void`
- `droppingSymbols(): void`
- `droppingSymbolsWithNearwin(): void`
- `checkForDropSymbols(): void`
- `removeDroppedSymbols(): void`

## Source Implementation
```typescript
const { _decorator, Vec2,  tween } = cc;
import { SlotBaseModule } from "../../../Core/SlotBaseModule";
import { CASCADE_TABLE_CONFIG, CascadeModuleConfig } from "./CascadeModuleConfig";
import { SlotSymbolManager } from "../../../BaseModule/Table/SlotSymbol/SlotSymbolManager";
import { SlotSymbolModule } from "../../../BaseModule/Table/SlotSymbol/SlotSymbolModule";
import { SymbolIndexType, SymbolOwnerType } from "../../../Components/Common/SlotEnum";
import { SlotGameSettings } from "../../../Core/SlotGameSettings";
import { CascadeModuleData } from "./CascadeModuleData";
import { HelpDocuments } from "../../../Components/Common/HelpDocuments";
const { inject } = eno;

const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.CASCADE_MODULE)
export class VerticalCascadeModule extends SlotBaseModule {

	@property({ type: cc.Node }) container = null;
	@property(SlotSymbolManager)
	symbolManager: SlotSymbolManager = null;

	protected config: CascadeModuleConfig;
	protected tableConfig: CASCADE_TABLE_CONFIG = null;
	protected matrix: string[][] = [];
	protected listTraceWay: string[][] = [];
	protected listSymbols: cc.Node[][] = []; // list symbols from symbol manager
	protected listDropColumns: number[] = []; // list column has dropped symbols
	protected listDroppedSymbols: cc.Node[] = []; // all dropped symbols
	protected listNewSymbols: cc.Node[] = []; // all new symbols

	protected _respinCB: Function = null;
	protected _stopRespinCB: Function = null;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;

	protected _hasStartRespin: boolean = false;
	protected _hasRespinCompleted: boolean = false;

	onLoadExtend(): void {
		this.config = this.getConfig();
		this.initLayout();
		if (!this.symbolManager) {
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}
	}

	public getConfig(): CascadeModuleConfig {
		return this.getComponent(CascadeModuleConfig);
	}

	protected registerEvents(): void {
		if (!this.moduleEvent) {
			return;
		}

		this.moduleEvent.on("TABLE_START_RESPIN", this.startRespin, this);
		this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespin, this);
	}

	protected initLayout(): void {
		this.tableConfig = this.config.CASCADE_TABLE_CONFIG;

		let positions: cc.Vec2[][] = [];
		const cellSize = this.tableConfig.cellSize;
		for (let col = 0; col < this.tableConfig.format.length; col++) {
			positions[col] = [];
			for (let row = 0; row < this.tableConfig.format[col]; row++) {
				const tableWidth = this.tableConfig.format.length * cellSize.x;
				const tableHeight = this.tableConfig.format[col] * cellSize.y;
				const offsetX = - tableWidth / 2 + cellSize.x / 2;
				const offsetY = tableHeight / 2 - cellSize.y / 2;
				const x = offsetX + col * cellSize.x;
				const y = offsetY - row * cellSize.y;
				positions[col][row] = new cc.Vec2(x, y);
			}
		}
		this.tableConfig.positions = positions;
	}

	protected resetSymbolList(): void {
		const listIndex = this.config.SYMBOL_INDEXES;
		for (let i = 0; i < listIndex.length; i++) {
			this.listSymbols[i] = [];
			for (let j = 0; j < listIndex[i].length; j++) {
				this.listSymbols[i][j] = null;
			}
		}
	}

	public updateLatestMatrix(matrix: string[][]): void {
		this.matrix = [...matrix];
	}

	public startRespin(matrix: string[][], traceWays: string[][]): void {
		this.clearSymbols();
		if (!matrix && !traceWays) {
			const cascadeData: CascadeModuleData = this.getComponent(CascadeModuleData);
			const { verticalMatrix, listTraceWayVertical } = cascadeData.formatData();
			this.matrix = verticalMatrix;
			this.listTraceWay = listTraceWayVertical;
		} else {
			this.matrix = matrix;
			this.listTraceWay = traceWays;
		}
		
		this.listDroppedSymbols = [];
		this.listNewSymbols = [];

		this.checkForDropSymbols();
		this.resetSymbolList();
		this.updateSymbolList();

		// remove symbol by traceWay data
		this.removeDroppedSymbols();

		this._hasStartRespin = true;
		this._hasRespinCompleted = false;
	}

	public stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>  {
		let tw = null;
		if (!matrix && !traceWays) {
			const cascadeData: CascadeModuleData = this.getComponent(CascadeModuleData);
			const { verticalMatrix, listTraceWayVertical } = cascadeData.formatData();
			this.matrix = verticalMatrix;
			tw = listTraceWayVertical;
		} else {
			this.matrix = matrix;
			tw = traceWays;
		}

		this.preparingSymbols();
		this.droppingSymbols();

		this._respinCB = () => {
			this.listSymbols = [];
			this.listTraceWay = tw;
			this._stopRespinCB && this._stopRespinCB();
			this._stopRespinCB = null;
			this._respinCB = null;
		}	

		this.scheduleOnce(this._respinCB, this.config.CASCADING_TIME_COMPLETED);
		this._hasStartRespin = false;
		this._hasRespinCompleted = true;

		return new Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}

	resetAllEffectAndTasks(): void {
		// reset callback, remove schedule
		if (this._respinCB) {
			this.unschedule(this._respinCB);
			this._respinCB();
		} else {
			this.listSymbols = [];
		}

		// if has startRespin event and then back-to-real, event stopRespin 
		if (this._hasStartRespin && !this._hasRespinCompleted) {
			let index = 0;
			for (let i = 0; i < this.matrix.length; i++) {
				let row = 0;
				for (let j = 0; j < this.matrix[i].length; j++) {
					const symbolValue = this.matrix[i][j];
					const { size } = this.mapSymbolData(symbolValue);
					row = row + size - 1;
					index = this.getSymbolIndex(i, row);
					const symbol = this.symbolManager.getSymbolByIndex(index, SymbolOwnerType.CASCADE_SYMBOL);
					if (symbol) {
						symbol.setParent(this.container);
						symbol.active = true;

						//update symbol again
						const symbolComp: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);
						symbolComp.init(symbolValue)
						symbolComp.changeToSymbol(symbolValue);
			
						const position = this.tableConfig.positions[i][row];
						if (size > 1) {
							symbol.setPosition(new cc.Vec2(position.x, position.y + (size - 1) * this.tableConfig.cellSize.y * 0.5));
						} else {
							symbol.setPosition(position);
						}
					}
					row++;
				}
			}
		}
	}

	// *************************** //
	// need to custom stopRespin method to handle dropping symbol in nearwin case
	// *************************** //
	protected stopRespinWithNearwin(matrix: string[][], traceWays: string[][]): Promise<void> {
		this.matrix = matrix;

		this.preparingSymbols();
		this.droppingSymbolsWithNearwin();

		this.listTraceWay = traceWays;
		this._hasStartRespin = false;
		this._hasRespinCompleted = true;

		return new Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}

	protected preparingSymbols(): void {
		this.processOldSymbols(); // get old symbols for dropping
		this.processNewSymbols(); // create all new symbols and drop them
	}

	protected droppingSymbols(): void {
		this.fallingSymbols(this.listDroppedSymbols);
		this.fallingSymbols(this.listNewSymbols);
	}

	protected droppingSymbolsWithNearwin(): void {
		this.fallingSymbolsWithDelay(this.listDroppedSymbols, this.config.DELAY_FALLING_TIME);
		this.fallingNewSymbols(this.listNewSymbols);
	}

	// ========================== Cascade logic ==================================
	// get all columns has dropped symbols
	protected checkForDropSymbols(): void {
		this.listDropColumns = [];
		for (let col = 0; col < this.listTraceWay.length; col++) {
			const listDrop = this.listTraceWay[col].some((symbol) => symbol.startsWith(this.config.DROP_SYMBOL_CODE));
			if (listDrop) {
				this.listDropColumns.push(col);
			}
		}
	}

	protected removeDroppedSymbols(): void {
		for (let i = 0; i < this.listDropColumns.length; i++) {
			const col = this.listDropColumns[i];
			let row = this.listSymbols[col].length - 1;
			for (let j = this.listTraceWay[col].length - 1; j >= 0; j--) {
				const value = this.listTraceWay[col][j];
				const { code, size } = this.mapSymbolData(value);
				if (code == this.config.DROP_SYMBOL_CODE) {
					this.removeSymbolAt(col, row);
				}
				row = row - size;
			}
		}
	}

	// get old symbol and push them in a list
	protected processOldSymbols(): void {
		for (let i = 0; i < this.listDropColumns.length; i++) {
			const col = this.listDropColumns[i];
			this.getOldSymbols(col);
		}
	}

	// get new symbol and push them in a list
	protected processNewSymbols(): void {
		for (let i = 0; i < this.listDropColumns.length; i++) {
			const col = this.listDropColumns[i];
			this.getNewSymbols(col, i);
		}

		this.symbolManager.updateSymbolSiblingIndex(eno.ArrayUtils.flatOnce(this.listSymbols).filter(Boolean));
	}

	// play dropping symbol in a list
	protected fallingSymbols(listSymbols: cc.Node[]): void {
		for (let i = 0; i < listSymbols.length; i++) {
			const symbol = listSymbols[i];
			this.playFalling(symbol);
		}
	}

	protected fallingNewSymbols(listSymbols: cc.Node[]): void {
		const totalNewSymbols = listSymbols.length;
		for (let i = 0; i < listSymbols.length; i++) {
			const symbol = listSymbols[i];
			this.playFalling(symbol);
			if (i == totalNewSymbols - 1) {
				this.completeCascading();
			}
		}
	}

	// play dropping symbol in a list with delay time
	protected fallingSymbolsWithDelay(listSymbols: cc.Node[], delayTime: number = 0): void {
		for (let i = 0; i < listSymbols.length; i++) {
			const symbol = listSymbols[i];
			this.scheduleOnce(() => {
				this.playFalling(symbol);
			}, delayTime);
		}
	}

	// get falling time of a symbol
	protected getFallingTime(): { fallingTime: number, deltaTimeCubicIn: number, timeBouncing: number, totalTime: number } {
		const isF2R = this.gameSettings.isTurboActive;
		const fallingTime = isF2R ? this.config.FALLING_TIME : this.config.FALLING_TIME * 2;
		const deltaTimeCubicIn = 3 / 60;
		const timeBouncing = isF2R ? 0.1 : 0.3;
		const totalTime = (fallingTime - deltaTimeCubicIn) + (timeBouncing * 0.3) * 2;

		return { fallingTime, deltaTimeCubicIn, timeBouncing, totalTime };
	}

	protected playFalling(symbol: cc.Node): void {
		//support back to real
		if (!symbol["droppedPosition"]) {
			return;
		}

		const { fallingTime, deltaTimeCubicIn, timeBouncing } = this.getFallingTime();
		const { targetPos, targetBouncePos } = symbol["droppedPosition"];
		symbol.emit("SHOW_STATIC");

		symbol["tweenDroppedSymbol"] = tween(symbol)
			.to(fallingTime - deltaTimeCubicIn, { position: targetPos }, { easing: 'cubicIn' })
			.call(() => {
				symbol.emit("PLAY_ANIMATION_APPEAR");
			})
			.to(timeBouncing * 0.3, { position: targetBouncePos })
			.delay(timeBouncing * 0.3)
			.to(timeBouncing * 0.3, { position: targetPos })
			.call(() => {
				symbol['tweenDroppedSymbol'] = null;
				symbol["droppedPosition"] = null;
				symbol["colIndex"] = null;
			})
			.start();
	}

	protected completeCascading(): void {
		const { fallingTime } = this.getFallingTime();
		this._respinCB = () => {
			this.listSymbols = [];
			this._stopRespinCB && this._stopRespinCB();
			this._stopRespinCB = null;
			this._respinCB = null;
		}
		this.scheduleOnce(this._respinCB, fallingTime);
	}

	// ========================== Cascade utils ==================================
	// update list symbol from symbol manager by index
	protected updateSymbolList(): void {
		let index = 0;
		for (let i = 0; i < this.matrix.length; i++) {
			let row = 0;
			for (let j = 0; j < this.matrix[i].length; j++) {
				const symbolValue = this.matrix[i][j];
				const { size } = this.mapSymbolData(symbolValue);
				row = row + size - 1;
				index = this.getSymbolIndex(i, row);

				const symbol = this.symbolManager.getSymbolByIndex(index, SymbolOwnerType.CASCADE_SYMBOL);
				if (symbol) {
					this.listSymbols[i][row] = symbol;

					symbol.setParent(this.container);
					symbol.active = true;

					const position = this.tableConfig.positions[i][row];
					if (size > 1) {
						symbol.setPosition(new cc.Vec2(position.x, position.y + (size - 1) * this.tableConfig.cellSize.y * 0.5));
					} else {
						symbol.setPosition(position);
					}
				}

				row++;
			}
		}
		this.symbolManager.updateSymbolSiblingIndex(eno.ArrayUtils.flatOnce(this.listSymbols).filter(Boolean));
	}

	protected removeSymbolAt(col: number, row: number): void {
		const symbol = this.listSymbols[col][row];
		if (symbol) {
			this.symbolManager.removeSymbol(symbol);
			symbol.parent = null;
			this.listSymbols[col][row] = null;
		}
	}

	// get old symbols by column
	protected getOldSymbols(col: number): void {
		const listOldSymbols = this.listTraceWay[col].filter((symbol) => !symbol.startsWith(this.config.DROP_SYMBOL_CODE));
		if (listOldSymbols.length == 0) {
			return;
		}

		let currentIndex = this.listSymbols[col].length - 1;

		let i = this.listSymbols[col].length - 1;
		let oldSymbolIndex = listOldSymbols.length - 1;
		while (i >= 0) {
			let symbol = this.listSymbols[col][i];
			if (symbol) {
				if (i < currentIndex) {
					// update symbol index
					this.swapSymbol(col, currentIndex, i);
					SlotSymbolModule.getModuleComponent(symbol).setIndex(this.getSymbolIndex(col, currentIndex));
					// update symbol position
					const posY = symbol.position.y - (currentIndex - i) * this.tableConfig.cellSize.y;
					const droppedPosition = this.calculatePosition(symbol.position.x, posY);

					symbol["droppedPosition"] = droppedPosition;
					this.listDroppedSymbols.push(symbol);
				}

				const symbolValue = listOldSymbols[oldSymbolIndex];
				const { size } = this.mapSymbolData(symbolValue);
				currentIndex = currentIndex - size;
				i = i - size;
				oldSymbolIndex--;
			} else {
				i--;
			}
		}
	}

	// get new symbols by column
	protected getNewSymbols(col: number, idx: number): void {
		const firstPosition = this.tableConfig.positions[col][0];
		const listOldSymbols = this.listTraceWay[col].filter((symbol) => !symbol.startsWith(this.config.DROP_SYMBOL_CODE));
		const totalSymbols = this.matrix[col].length;
		const startIndex = totalSymbols - listOldSymbols.length - 1;

		let row = this.listSymbols[col].length - 1;
		for (let i = this.matrix[col].length - 1; i >= 0; i--) {
			const { code, size } = this.mapSymbolData(this.matrix[col][i]);
			if (i <= startIndex) {
				const symbol = this.createNewSymbol(col, row, code, size);
				if (symbol) {
					const position = this.tableConfig.positions[col][row];
					symbol.setPosition(new cc.Vec2(position.x, firstPosition.y + (size + startIndex - i) * this.tableConfig.cellSize.y));

					const droppedPosition = this.calculatePosition(position.x, position.y);
					symbol["droppedPosition"] = droppedPosition;
					symbol["colIndex"] = idx; //the column which symbol is in

					this.listSymbols[col][row] = symbol;
					this.listNewSymbols.push(symbol);
				}
			}
			row = row - size;
		}
	}

	protected createNewSymbol(col: number, row: number, code: string, size: number): cc.Node {
		const symbol = this.symbolManager.getSymbolByIndex(SymbolIndexType.UNUSED, SymbolOwnerType.CASCADE_SYMBOL);
		const symbolModule = SlotSymbolModule.getModuleComponent(symbol);
		const index = this.getSymbolIndex(col, row);
		if (symbolModule) {
			symbolModule.init(code, new Vec2(1, size));
			symbolModule.changeToSymbol(code);
			symbolModule.setIndex(index);
		}
		symbol.setParent(this.container);
		symbol.active = true;

		return symbol;
	}

	// ========================== Cascade utils ==================================
	protected mapSymbolData(symbolValue:string): { code: string, size: number } {
		if (symbolValue.indexOf('_') >= 0) {
			const data = symbolValue.split('_');
			return {code: data[0], size: Number(data[2])};
		} else {
			return {code: symbolValue, size: 1}
		}
	}

	protected calculatePosition(posX: number, posY: number): { targetPos: cc.Vec2, targetBouncePos: cc.Vec2 } {
		const targetPos = new cc.Vec2(posX, posY);
		const DELTA_BOUNCING = 10;
		const targetBouncePos = new cc.Vec2(posX, posY + DELTA_BOUNCING);

		return { targetPos, targetBouncePos };
	}

	protected getSymbolIndex(col: number, row: number): number {
		const listIndex = this.config.SYMBOL_INDEXES;
		return listIndex[col][row];
	}

	protected swapSymbol(col: number, index1: number, index2: number): void {
		this.listSymbols[col][index1] = this.listSymbols[col][index2];
		this.listSymbols[col][index2] = null;
	}

	protected clearSymbols(): void {
		const symbolList = eno.ArrayUtils.flatOnce(this.listSymbols);
		symbolList.forEach(symbol => {
			this.symbolManager.returnSymbol(symbol);
		});
		this.listSymbols = [];
	}

	protected getSymbolAt(col: number, row: number): cc.Node {
		let r = this.convertRow(col, row);
		const symbol = this.listSymbols[col][r];
		return symbol;
	}

	// a reel has a symbol on each row, e.g reel has 5 rows with corresponding 5 symbols
	// data of list traceway is all symbol code and its size, e.g: ["A_1_2", "9_1_1"]
	//          - symbol A has width = 1 cell and height = 2 cells
	//          - symbol 9 has width = 1 cell and height = 1 cell
	// this method will return which row in the reel is corresponding with row in data list traceway
	// return -1 if has error
	protected convertRow(col: number, row: number): number {
		let r = 0;
		for (let j = 0; j < this.listTraceWay[col].length; j++) {
			const value = this.listTraceWay[col][j];
			const { size } = this.mapSymbolData(value);
			r = r + size - 1;
			if (j == row) {
				return r;
			} else {
				r++;
			}
		}
		return -1;
	}

	// ===========================================================================

	onDestroy(): void {
		this.unregisterEvents();
	}
}
```
