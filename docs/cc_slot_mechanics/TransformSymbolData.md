# TransformSymbolData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TransformSymbolData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `getTransformData(): TransformData[]`
- `getMatrix0(): string[]`
- `getMatrix(): string[]`
- `getTransformDataFromProperty(): TransformData[]`
- `getTransformDataFromMatrix(): TransformData[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../../cc-slot-module/SlotModuleExport';
import { GAME_MODE_ENUM } from '../../../cc-slot-module/SlotModuleExport';
import { TransformSymbolConfig } from './TransformSymbolConfig';
const { ccclass, property } = _decorator;

type TransformData = {
	symbolCode: string;
	symbolIndex: number;
}

@ccclass
export class TransformSymbolData extends BaseDataModule {
	@property customTransformProperty: string = "";

	protected config: TransformSymbolConfig = null;
	/**
     * @key matrix0: matrix for current game mode before transform
     * @key matrix: matrix for current game mode after transform
     * @key normalGameMatrix: matrix for normal game mode when resume game
     * @key freeGameMatrix: matrix for free game mode when resume game
     * @key respinGameMatrix: matrix for free game mode when respin game
	 * @example ["2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]
	 * @type string[]
	 * @key state: current game mode
	 * @type number
	 * @example GAME_MODE_ENUM.NORMAL_GAME => 0
     */
	override registeredKeys: string[] = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix", "respinGameMatrix", "state"];

	onloadExtend(): void {
		this.config = this.getComponent(TransformSymbolConfig);
		if (this.customTransformProperty) {
			this.registeredKeys.push(this.customTransformProperty);
		}
	}

	getTransformData(): TransformData[] {
		if (this.customTransformProperty) {
			return this.getTransformDataFromProperty();
		}
		return this.getTransformDataFromMatrix();
	}

	getMatrix0(): string[] {
		return Array.from(this["matrix0"] || []);
	}

	getMatrix(): string[] {
		let rawMatrix = this["matrix"] || this["matrix0"];
		switch (this["state"]) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				rawMatrix = this["normalGameMatrix"] || rawMatrix;
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				rawMatrix = this["freeGameMatrix"] || rawMatrix;
				break;
			case GAME_MODE_ENUM.RESPIN_GAME:
				rawMatrix = this["respinGameMatrix"] || rawMatrix;
				break;
		}
		return Array.from(rawMatrix || []);
	}

	protected getTransformDataFromProperty(): TransformData[] {
		if (!this[this.customTransformProperty]) {
			return [];
		}
		const arr = this[this.customTransformProperty].split(",");
		const transformData: TransformData[] = [];
		for (let i = 0; i < arr.length; i++) {
			const subArr = arr[i].split(":");
			transformData.push({ symbolCode: subArr[0], symbolIndex: Number(subArr[1]) });
		}
		return transformData;
	}

	protected getTransformDataFromMatrix(): TransformData[] {
		const transformData: TransformData[] = [];
		const matrix0: string[] = this.getMatrix0();
		const matrix: string[] = this.getMatrix();

		if (!matrix0.length || !matrix.length || eno.ArrayUtils.matrixEqual(matrix0, matrix)) {
			return [];
		}

		for (let i = 0; i < matrix.length; i++) {
			if (matrix[i] !== matrix0[i]) {
				transformData.push({ symbolCode: matrix[i], symbolIndex: i });
			}
		}

		return transformData;
	}
}

```
