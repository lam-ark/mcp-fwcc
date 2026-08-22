# RemovedSymbolModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/RemovedSymbol/RemovedSymbolModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`RemovedSymbolModule`** extends `SlotBaseModule`

## CC Properties
- `table`
- `symbolManager`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `getConfig(): RemovedSymbolConfig`
- `initLayout(): void`
- `stopSpin(): Promise<void>`
- `onReelStopped(): void`
- `resetSymbolList(): void`
- `removeSymbols(): void`
- `transformSymbols(): void`
- `updateSymbolList(): void`
- `mapSymbolData(): `
- `getSymbolIndex(): number`
- `createNewSymbol(): cc.Node`
- `convertRow(): number`
- `clearSymbols(): void`

## Source Implementation
```typescript
const { _decorator, Vec2 } = cc;
import { SlotBaseModule } from "../../cc-slot-module/SlotModuleExport";
import { SlotSymbolManager } from "../../cc-slot-module/SlotModuleExport";
import { RemovedSymbolConfig } from "./RemovedSymbolConfig";
import { RemovedSymbolData } from "./RemovedSymbolData";
import { SlotSymbolModule } from "../../cc-slot-module/SlotModuleExport";
import { SymbolIndexType, SymbolOwnerType } from "../../cc-slot-module/SlotModuleExport";
import { HelpDocuments } from "../../cc-slot-module/Components/Common/HelpDocuments";

const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.REMOVED_SYMBOL_MODULE)
export class RemovedSymbolModule extends SlotBaseModule {

	@property({ type: cc.Node }) table: cc.Node = null;
	@property(SlotSymbolManager) symbolManager: SlotSymbolManager = null;

	protected tableConfig: any = null;
	protected tableData: RemovedSymbolData = null;
	protected matrix: string[][] = [];
	protected transformMatrix: any[] = [];
	protected listSymbols: cc.Node[][] = []; // list symbols from symbol manager

	protected _tableCallback: Function = null;

	onLoadExtend(): void {
		this.initLayout();
		this.tableData = this.getComponent(RemovedSymbolData);
		
		if(!this.symbolManager){
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}
	}

	protected registerEvents(): void {
		if (this.moduleEvent) {
			//this.moduleEvent.on(TableModuleEvents.TABLE_INIT, this.initTable, this);
			this.moduleEvent.on("TABLE_STOP_SPIN", this.stopSpin, this);
			this.moduleEvent.on("REEL_STOPPED", this.onReelStopped, this);
		}
	}

	public getConfig(): RemovedSymbolConfig {
		return this.getComponent(RemovedSymbolConfig);
	}

	protected initLayout(): void {
		this.tableConfig = this.getConfig().TABLE_CONFIG;

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

	stopSpin(matrix?: string[][]): Promise<void> {
		const { verticalMatrix, listTransformIndex } = this.tableData.formatData();
		this.matrix = verticalMatrix;
		this.transformMatrix = listTransformIndex;

		return new Promise((resolve) => {
			if (this.transformMatrix.length == 0) {
				resolve();
			} else {
				this._tableCallback = resolve;
			}
		});
	}

	onReelStopped(col: number): void {
		if (col == this.getConfig().TABLE_CONFIG.format.length) {
			if (this.transformMatrix.length > 0) {
				this.resetSymbolList();
				this.updateSymbolList();
				this.removeSymbols();
				this.transformSymbols();
				//TODO - for testing
				this.scheduleOnce(() => {
					this.listSymbols = [];
					this._tableCallback && this._tableCallback();
					this._tableCallback = null;
				}, 0.5);
			}
		}
	}

	protected resetSymbolList(): void {
		const listIndex = this.getConfig().SYMBOL_INDEXES;
		for (let i = 0; i < listIndex.length; i++) {
			this.listSymbols[i] = [];
			for (let j = 0; j < listIndex[i].length; j++) {
				this.listSymbols[i][j] = null;
			}
		}
	}

	protected removeSymbols(): void {
		for (let i = 0; i < this.transformMatrix.length; i++) {
			const col = this.transformMatrix[i].col;
			const row = this.transformMatrix[i].row;
			const r = this.convertRow(col, row);
			const symbol = this.listSymbols[col][r];
			if (symbol) {
				this.symbolManager.removeSymbol(symbol);
				this.listSymbols[col][r] = null;
			}
		}
	}

	protected transformSymbols(): void {
		for (let i = 0; i < this.transformMatrix.length; i++) {
			const { col, row, symbolValue } = this.transformMatrix[i];
			const { code, size } = this.mapSymbolData(symbolValue);
			const r = this.convertRow(col, row);
			const symbol = this.createNewSymbol(col, r, code, size);
			if (symbol) {
				const position = this.tableConfig.positions[col][r];
				if (size > 1) {
					symbol.setPosition(new cc.Vec2(position.x, position.y + (size - 1) * this.tableConfig.cellSize.y * 0.5));
				} else {
					symbol.setPosition(position);
				}   
				this.listSymbols[col][r] = symbol;
			}
		}
	}

	// update list symbol from symbol manager by index
	protected updateSymbolList(): void {
		let index = 0;
		for (let i = 0; i < this.matrix.length; i++) {
			let row = 0;
			for (let j = 0; j < this.matrix[i].length; j++) {
				const symbolValue = this.matrix[i][j];
				if (symbolValue == "") {
					continue;
				}

				const { size } = this.mapSymbolData(symbolValue);
				row = row + size - 1;
				index = this.getSymbolIndex(i, row);
                
				const symbol = this.symbolManager.getSymbolByIndex(index, SymbolOwnerType.REMOVED_SYMBOL);
				if (symbol) {
					this.listSymbols[i][row] = symbol;
                    
					symbol.setParent(this.table);
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
	}

	protected mapSymbolData(symbolValue: string): { code: string, size: number } {
		if (symbolValue.indexOf('_') >= 0) {
			const data = symbolValue.split('_');
			return {code: data[0], size: Number(data[2])};
		} else {
			return {code: symbolValue, size: 1}
		}
	}

	protected getSymbolIndex(col: number, row: number): number {
		const listIndex = this.getConfig().SYMBOL_INDEXES;
		return listIndex[col][row];
	}

	protected createNewSymbol(col: number, row: number, code: string, size: number): cc.Node {
		const symbol = this.symbolManager.getSymbolByIndex(SymbolIndexType.UNUSED, SymbolOwnerType.REMOVED_SYMBOL);
		const symbolModule = SlotSymbolModule.getModuleComponent(symbol);
		if (symbolModule) {
			symbolModule.init(code, new Vec2(1, size));
			symbolModule.changeToSymbol(code);
			symbolModule.index = this.getSymbolIndex(col, row);
		}
		symbol.setParent(this.table);
		symbol.active = true;

		return symbol;
	}

	protected convertRow(col: number, row: number): number {
		let r = 0;
		for (let j = 0; j < this.matrix[col].length; j++) {
			const value = this.matrix[col][j];
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

	clearSymbols(): void {
		const symbolList = eno.ArrayUtils.flatOnce(this.listSymbols);
		symbolList.forEach(symbol => {
			this.symbolManager.returnSymbol(symbol);
		});
		this.listSymbols = [];
	}
}
```
