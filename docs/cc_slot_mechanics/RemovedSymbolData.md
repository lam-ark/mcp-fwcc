# RemovedSymbolData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/RemovedSymbol/RemovedSymbolData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`RemovedSymbolData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `getFormatMatrix(): string[]`
- `getMatrix(): string[]`
- `formatData(): `
- `makeTransformCode(): string`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from "../../cc-slot-module/SlotModuleExport";
import { RemovedSymbolConfig } from "./RemovedSymbolConfig";
import { GAME_MODE_ENUM } from "../../cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass
export class RemovedSymbolData extends BaseDataModule {
	config: RemovedSymbolConfig = null;

	/**
     * @key matrix: matrix for current game mode
     * @key normalGameMatrix: matrix for normal game mode when resume game
     * @key freeGameMatrix: matrix for free game mode when resume game
	 * @example ["2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]
	 * @type string[]
	 * @key formatMatrix: format matrix
	 * @key normalFormatMatrix: format matrix for normal game mode when resume game
	 * @key freeFormatMatrix: format matrix for free game mode when resume game
	 * @type string[]
	 * @example ["111", "111", "111", "111", "111"]
     */
	registeredKeys = ["matrix", "normalGameMatrix", "freeGameMatrix", "formatMatrix", "normalFormatMatrix", "freeFormatMatrix"];
	
	onloadExtend(): void {
		this.config = this.getComponent(RemovedSymbolConfig);
	}

	getFormatMatrix(): string[] {
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				return this["normalFormatMatrix"] || this["formatMatrix"];
			case GAME_MODE_ENUM.FREE_GAME:
				return this["freeFormatMatrix"] || this["formatMatrix"];
		}
	}

	getMatrix(): string[] {
		let matrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				matrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				matrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
		return matrix;
	}

	formatData(): { verticalMatrix: string[][], listTransformIndex: Array<{col: number, row: number, symbolValue: string}> } {
		const matrix = this.getMatrix().filter((e) => e != "");
		const formatMatrix = this.getFormatMatrix();
		let col = 0;
		let row = 0;
		let index = 0;
		let verticalMatrix = [];
		let listTransformIndex = [];

		for (let i = 0; i < formatMatrix.length; i++) {
			const size = formatMatrix[i].length;
			row = 0;
			verticalMatrix[i] = [];
			for (let j = 0; j < size; j++) {
				if (i > 0 && i < formatMatrix.length - 1) {
					if (row == 0) {
						col++;
					} else {
						const value = this.makeTransformCode(matrix[index]);
						if (value != matrix[index]) {
							listTransformIndex.push({col:i, row:row - 1, symbolValue:value});
						}
						verticalMatrix[i][row - 1] = matrix[index];
					}
				} else {
					const value = this.makeTransformCode(matrix[index]);
					if (value != matrix[index]) {
						listTransformIndex.push({col:i, row, symbolValue:value});
					}
					verticalMatrix[i][row] = matrix[index];
				}
				row++;
				index++;
			}
		}

		return { verticalMatrix, listTransformIndex };
	}

	makeTransformCode(oldValue: string): string {
		const hasTransform = oldValue.startsWith('B') || oldValue.startsWith('C') || oldValue.startsWith('D');
		if (hasTransform) {
			const newValue = oldValue.replace('B', '2').replace('C', '2').replace('D', '2');
			return newValue;
		}
		return oldValue;
	}

}
```
