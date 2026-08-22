# CascadeWildGenerationData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CascadeWildGenerationData`** extends `CascadeModuleData`

## Key Methods
- `onloadExtend(): void`
- `getFormatMatrix(): string[][]`
- `getMatrix(): string[][]`
- `getWildIndex(): `
- `formatData(): `

## Source Implementation
```typescript
const { _decorator } = cc;
import { CascadeModuleData } from "../../../cc-slot-module/SlotModuleExport";
import { CascadeWildGenerationConfig } from "./CascadeWildGenerationConfig";
import { GAME_MODE_ENUM } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class CascadeWildGenerationData extends CascadeModuleData {

	protected cascadeWildGenerationConfig: CascadeWildGenerationConfig;
	protected wildPosition: any;

	/**
     * @key formatMatrix: array of numbers that represent the number of symbols in each column
     * @key normalFormatMatrix: formatMatrix for normal game mode when resume game
     * @key freeFormatMatrix: formatMatrix for free game mode when resume game
	 * @type string[]
	 * @example ["111", "111", "111", "111", "111"]
     * @key wildAppearPosition: wild symbol position in matrix
	 * @type string
	 * @example "currentPosition:appearPosition" => "0:1"
     */
	onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "formatMatrix", "normalFormatMatrix", "freeFormatMatrix", "wildAppearPosition"];
		super.onloadExtend();
		this.cascadeWildGenerationConfig = this.getComponent(CascadeWildGenerationConfig);
	}

	getFormatMatrix(): string[][] {
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				return this["normalFormatMatrix"] || this["formatMatrix"];
			case GAME_MODE_ENUM.FREE_GAME:
				return this["freeFormatMatrix"] || this["formatMatrix"];
		}
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
		return matrix;
	}
    
	// convert the index of new wild to col and row in matrix, if not exist return -1,-1
	getWildIndex(): { col: number, row: number } {
		if (this["wildAppearPosition"]) {
			return this.wildPosition;
		} else {
			return {col:-1, row:-1};
		}
	}

	// format the matrix, the list drop symbols (traceWay) and wild generation position
	formatData(): { verticalMatrix: any[]; listTraceWayVertical: any[] } {
		const matrix = this.getMatrix().filter((e) => e.length > 0 && e[0] != "");
		const formatMatrix = this.getFormatMatrix() || this.cascadeWildGenerationConfig.CASCADE_TABLE_CONFIG.format;
		const traceWay = this.getTraceWay();
		let index = 0;
		let verticalMatrix = [];

		const sortedListSymbols = traceWay.sort(function (a, b) {
			return a - b;
		});

		const listTraceWayVertical = [];

		let wildIndex = -1;
		//wildAppearPosition format = currentPosition:appearPosition
		if (this["wildAppearPosition"]) {
			wildIndex = Number(this["wildAppearPosition"].split(':')[1]);
		}
        
		for (let i = 0; i < formatMatrix.length; i++) {
			const size = Number(formatMatrix[i]);
			verticalMatrix[i] = [];
			listTraceWayVertical[i] = [];
			for (let j = 0; j < size; j++) {
				// const height = Number(formatMatrix[i][j]);
				const height = 1;
				verticalMatrix[i][j] = matrix[index];
				if (sortedListSymbols.indexOf(index) > -1) {
					listTraceWayVertical[i][j] = `-1_1_${height}`;
				} else {
					listTraceWayVertical[i][j] = matrix[index];
				}
				if (wildIndex == index) {
					this.wildPosition = {col:i, row:j};
				}
				index++;
			}
		}

		return { verticalMatrix, listTraceWayVertical };
	}
}
```
