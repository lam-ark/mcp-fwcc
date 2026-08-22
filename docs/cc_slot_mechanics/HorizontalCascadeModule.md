# HorizontalCascadeModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`HorizontalCascadeModule`** extends `VerticalCascadeModule`

## Key Methods
- `getConfig(): HorizontalCascadeModuleConfig`
- `initLayout(): void`
- `startRespin(): void`
- `stopRespin(): Promise<void>`
- `updateSymbolList(): void`
- `removeDroppedSymbols(): void`
- `getOldSymbols(): void`
- `getNewSymbols(): void`
- `calculatePosition(): `

## Source Implementation
```typescript
const { _decorator } = cc;
import { HorizontalCascadeModuleConfig } from "./HorizontalCascadeModuleConfig";
import { CASCADE_TABLE_CONFIG, SlotSymbolModule, SymbolOwnerType, VerticalCascadeModule } from "../../../cc-slot-module/SlotModuleExport";
import { HorizontalCascadeData } from "./HorizontalCascadeData";
import { HelpDocuments } from "../../../cc-slot-module/Components/Common/HelpDocuments";

const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.HORIZONTAL_CASCADE_MODULE)
export class HorizontalCascadeModule extends VerticalCascadeModule {

	protected tableConfig: CASCADE_TABLE_CONFIG = null;

	public getConfig(): HorizontalCascadeModuleConfig {
		return this.getComponent(HorizontalCascadeModuleConfig);
	}

	protected initLayout(): void {
		this.tableConfig = this.getConfig().CASCADE_TABLE_CONFIG;

		let positions: cc.Vec2[][] = [];
		positions[0] = [];
		const cellSize = this.tableConfig.cellSize;
		for (let col = 0; col < this.tableConfig.format.length; col++) {
			const tableWidth = this.tableConfig.format.length * cellSize.x;
			//const tableHeight = this.tableConfig.format[col] * cellSize.y;
			const offsetX = - tableWidth / 2 + cellSize.x / 2;
			const x = offsetX + col * cellSize.x;
			positions[0][col] = new cc.Vec2(x, 0);
		}
		this.tableConfig.positions = positions;
	}

	public startRespin(matrix: string[][], traceWays: string[][]): void {
		if (!matrix && !traceWays) {
			const cascadeData: HorizontalCascadeData = this.getComponent(HorizontalCascadeData);
			const { horizonMatrix, listTraceWay } = cascadeData.formatData();
			super.startRespin(horizonMatrix, listTraceWay);
		} else {
			super.startRespin(matrix, traceWays);
		}
	}

	public stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>  {
		if (!matrix && !traceWays) {
			const cascadeData: HorizontalCascadeData = this.getComponent(HorizontalCascadeData);
			const { horizonMatrix, listTraceWay } = cascadeData.formatData();
			
			matrix = horizonMatrix;
			traceWays = listTraceWay;
		}

		return super.stopRespin(matrix, traceWays);
	}

	// ========================== Cascade utils ==================================
	// update list symbol from symbol manager by index
	protected updateSymbolList(): void {
		const listIndex = this.getConfig().SYMBOL_INDEXES;

		let col = 0;
		let index = 0;
		for (let j = 0; j < this.matrix[0].length; j++) {
			const symbolValue = this.matrix[0][j];
			const { size } = this.mapSymbolData(symbolValue);
			col = col + size - 1;
			index = listIndex[0][j];
			const symbol = this.symbolManager.getSymbolByIndex(index, SymbolOwnerType.CASCADE_SYMBOL);
			const position = this.tableConfig.positions[0][j];
			if (symbol) {
				this.listSymbols[0][col] = symbol;
                
				symbol.setParent(this.container);
				symbol.setPosition(position);
			}
			col++;
		}
	}

	// ========================== Cascade function ==================================
	protected removeDroppedSymbols(): void {
		for (let i = 0; i < this.listDropColumns.length; i++) {
			const col = this.listDropColumns[i];
			let row = this.listSymbols[i].length - 1;
			for (let j = this.listTraceWay[col].length - 1; j >= 0; j--) {
				const value = this.listTraceWay[col][j];
				const { code, size } = this.mapSymbolData(value);
				if (code == "-1") {
					this.removeSymbolAt(col, row);
				}
				row = row - size;
			}
		}
	}

	protected getOldSymbols(col: number): void {
		const listOldSymbols = this.listTraceWay[col].filter((symbol) => !symbol.startsWith('-1'));
		if (listOldSymbols.length < this.listTraceWay[0].length) {
			const listIndex = this.getConfig().SYMBOL_INDEXES;

			for (let i = 0; i < listOldSymbols.length; i++) {
				let index = i;
				let symbol = this.listSymbols[0][index];
				while (!symbol && index < listIndex[0].length) {
					index++;
					symbol = this.listSymbols[0][index];
				}

				if (!symbol || index == i) {
					continue;
				}

				this.swapSymbol(0, i, index);
				SlotSymbolModule.getModuleComponent(symbol).setIndex(listIndex[0][i]);

				const posX = symbol.position.x - (index - i) * this.tableConfig.cellSize.x;
				const droppedPosition = this.calculatePosition(posX, symbol.position.y);
            
				symbol["droppedPosition"] = droppedPosition;
				this.listDroppedSymbols.push(symbol);
			}
		}    
	}

	protected getNewSymbols(col: number): void {
		const listIndex = this.getConfig().SYMBOL_INDEXES;
		const totalCols = this.tableConfig.format.length;
		const rightPosition = this.tableConfig.positions[0][totalCols - 1];
		const listOldSymbols = this.listTraceWay[col].filter((symbol) => !symbol.startsWith('-1'));
		const startIndex = listOldSymbols.length;
        
		for (let i = listIndex[col].length - 1; i >= startIndex; i--) {
			const symbolValue = this.matrix[col][i];
			const { code, size } = this.mapSymbolData(symbolValue);
            
			const symbol = this.createNewSymbol(col, i, code, size);
			if (symbol) {
				const position = this.tableConfig.positions[0][i];
				symbol.setPosition(new cc.Vec2(rightPosition.x + (size + i - startIndex) * this.tableConfig.cellSize.x, position.y));

				const droppedPosition = this.calculatePosition(position.x, position.y);
				symbol["droppedPosition"] = droppedPosition;

				this.listSymbols[col][i] = symbol;                
				this.listNewSymbols.push(symbol);
			}
		}
	}

	protected calculatePosition(posX: number, posY: number): { targetPos: cc.Vec2, targetBouncePos: cc.Vec2 } {
		const targetPos = new cc.Vec2(posX, posY);
		const DELTA_BOUNCING = 10;
		const targetBouncePos = new cc.Vec2(posX + DELTA_BOUNCING, posY);

		return { targetPos, targetBouncePos };
	}
}
```
