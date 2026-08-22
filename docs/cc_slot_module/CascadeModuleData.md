# CascadeModuleData

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/CascadeModule/scripts/CascadeModuleData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`CascadeModuleData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `getMatrix(): string[][]`
- `getTraceWay(): number[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { CascadeModuleConfig } from "./CascadeModuleConfig";
import { BaseDataModule } from "../../../Core/BaseDataModule";
import { GAME_MODE_ENUM } from "../../../Components/Common/SlotEnum";
const { ccclass } = _decorator;

@ccclass
export class CascadeModuleData extends BaseDataModule {
	config: CascadeModuleConfig = null;

	registeredKeys = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix", "traceWay"];

	onloadExtend(): void {
		this.config = this.getComponent(CascadeModuleConfig);
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

	formatData():{
        verticalMatrix: string[][];
        listTraceWayVertical: string[][];
        horizonMatrix?: string[][];
        listTraceWayHorizontal?: string[][];
    }  {
		const matrix = this.getMatrix();
		const formatMatrix = this.config.CASCADE_TABLE_CONFIG.format;
		const traceWay = this.getTraceWay();

		let horizonMatrix = [];
		let listTraceWayHorizontal = [];

		let index = 0;
		let verticalMatrix = [];
		let listTraceWay = [];

		const sortedListSymbols = traceWay.sort(function (a, b) {
			return a - b;
		});

		for (let i = 0; i < formatMatrix.length; i++) {
			const size = formatMatrix[i];
			verticalMatrix[i] = [];
			listTraceWay[i] = [];
			for (let j = 0; j < size; j++) {
				verticalMatrix[i][j] = matrix[i][j];
				if (sortedListSymbols.indexOf(index) > -1) {
					listTraceWay[i][j] = `${this.config.DROP_SYMBOL_CODE}`;
				} else {
					listTraceWay[i][j] = matrix[i][j];
				}
				index++;
			}
		}

		return { verticalMatrix, listTraceWayVertical: listTraceWay, horizonMatrix, listTraceWayHorizontal };
	}
}

```
