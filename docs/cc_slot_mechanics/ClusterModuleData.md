# ClusterModuleData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModuleData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`ClusterModuleData`** extends `CascadeModuleData`

## Key Methods
- `onloadExtend(): void`
- `getFormatMatrix(): string[][]`
- `getMatrix(): string[][]`
- `formatData(): `

## Source Implementation
```typescript
const { _decorator } = cc;
import { CascadeModuleData } from "../../../cc-slot-module/SlotModuleExport";
import { ClusterModuleConfig } from "./ClusterModuleConfig";
import { GAME_MODE_ENUM } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class ClusterModuleData extends CascadeModuleData {
	clusterModuleConfig;

	/**
     * @key formatMatrix: array of numbers that represent the number of symbols in each column
     * @key normalFormatMatrix: formatMatrix for normal game mode when resume game
     * @key freeFormatMatrix: formatMatrix for free game mode when resume game
	 * @example ["111", "111", "111", "111", "111"]
	 * @type string[]
     */
	onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "formatMatrix", "normalFormatMatrix", "freeFormatMatrix"];
		super.onloadExtend();
		this.clusterModuleConfig = this.getComponent(ClusterModuleConfig);
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

	formatData(): { verticalMatrix: string[][], listTraceWayVertical: string[][], listClusters: { col: number, row: number, symbolValue: string }[] } {
		const matrix = this.getMatrix().filter((e) => e.length > 0 && e[0] != "");
		const formatMatrix = this.getFormatMatrix();
		const traceWay = this.getTraceWay();
		let totalClusterSymbols = 9; // for testing
		let row = 0;
		let index = 0;
		let verticalMatrix = [];
		let listTraceWayVertical = [];
		let listClusters = [];

		const sortedListSymbols = traceWay.sort(function (a, b) {
			return a - b;
		});

		for (let i = 0; i < formatMatrix.length; i++) {
			const size = formatMatrix[i].length;
			row = 0;
			verticalMatrix[i] = [];
			listTraceWayVertical[i] = [];
			for (let j = 0; j < size; j++) {
				const height = Number(formatMatrix[i][j]);
				if (i > 0 && i < formatMatrix.length - 1) {
					if (row == 0) {
						// to do
					} else {
						verticalMatrix[i][row - 1] = matrix[index];
						if (sortedListSymbols.indexOf(index) > -1) {
							listTraceWayVertical[i][row - 1] = `-1_1_${height}`;
						} else {
							listTraceWayVertical[i][row - 1] = matrix[index];
						}
						if (totalClusterSymbols > 0) {
							listClusters.push({col:i, row:row - 1, symbolValue: `3_1_${height}`});
						}
					}
				} else {
					verticalMatrix[i][row] = matrix[index];
					if (sortedListSymbols.indexOf(index) > -1) {
						listTraceWayVertical[i][row] = `-1_1_${height}`;
					} else {
						listTraceWayVertical[i][row] = matrix[index];
					}
					if (totalClusterSymbols > 0) {
						listClusters.push({col:i, row, symbolValue: `3_1_${height}`});
					}
				}
				row++;
				index++;
				if (totalClusterSymbols > 0) {
					totalClusterSymbols--;
				}
			}
		}

		return { verticalMatrix, listTraceWayVertical, listClusters };
	}
}
```
