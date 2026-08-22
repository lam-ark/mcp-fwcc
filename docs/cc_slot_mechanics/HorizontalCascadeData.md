# HorizontalCascadeData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`HorizontalCascadeData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `getMatrix(): string[][]`
- `getTraceWay(): number[]`
- `formatData(): `

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from "../../../cc-slot-module/Core/BaseDataModule";
import { GAME_MODE_ENUM } from "../../../cc-slot-module/Components/Common/SlotEnum";
import { HorizontalCascadeModuleConfig } from "./HorizontalCascadeModuleConfig";
const { ccclass } = _decorator;

@ccclass
export class HorizontalCascadeData extends BaseDataModule {
	config: HorizontalCascadeModuleConfig = null;

	registeredKeys = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix", "traceWay"];

	onloadExtend(): void {
		this.config = this.getComponent(HorizontalCascadeModuleConfig);
	}

	getMatrix(): string[][] {
		let matrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				matrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				matrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
		return eno.SlotUtils.convertSlotMatrix(matrix, this.config.CASCADE_TABLE_CONFIG.format);
	}

	getTraceWay(): number[] {
		return this["traceWay"] ? this["traceWay"].sort(function (a, b) {
			return a - b; 
		}) : [];
	}


	formatData(): { horizonMatrix: string[][], listTraceWay: string[][] } {
		const matrix = this.getMatrix();
		const traceWay = this.getTraceWay();
		const sortedListSymbols = traceWay.sort(function (a, b) {
			return a - b;
		});
		
		const listTraceWay = [];
		listTraceWay[0] = [];
		let horizonMatrix = [];
		horizonMatrix[0] = [];
		
		for (let i = 0; i < matrix.length; i++) {
			horizonMatrix[0][i] = matrix[i][0];
			if (sortedListSymbols.indexOf(i) > -1) {
				listTraceWay[0][i] = `${this.config.DROP_SYMBOL_CODE}`;
			} else {
				listTraceWay[0][i] = matrix[i][0];
			}
		}

		return { horizonMatrix, listTraceWay };
	}
}
```
