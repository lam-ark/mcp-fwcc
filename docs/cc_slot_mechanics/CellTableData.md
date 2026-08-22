# CellTableData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CellTableData`** extends `SlotTableData`

## Key Methods
- `onloadExtend(): void`
- `getMatrix(): string[][]`
- `getRawMatrix(): string[]`
- `getRawResumeMatrix(): string[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GAME_MODE_ENUM, SlotTableData } from '../../../cc-slot-module/SlotModuleExport';
import { CellTableConfig } from './CellTableConfig';
const { ccclass } = _decorator;

@ccclass
export class CellTableData extends SlotTableData {
	config: CellTableConfig = null;

	/**
     * @key matrix: matrix for current game mode
     * @key normalGameMatrix: matrix for normal game mode when resume game
     * @key freeGameMatrix: matrix for free game mode when resume game
	 * @example ["2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]
	 * @type string[]
     */
	registeredKeys = ["matrix", "freeGameMatrix", "normalGameMatrix"];

	onloadExtend(): void {
		this.config = this.getComponent(CellTableConfig);
	}

	getMatrix(): string[][] {
		let rawMatrix = this.getRawMatrix();
		return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}

	getRawMatrix(): string[] {
		let mx = this["freeGameMatrix"] || this["normalGameMatrix"] || this["matrix"];
		return mx;
	}

	getRawResumeMatrix(): string[] {
		let mx = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.FREE_GAME:
				mx = this["freeGameMatrix"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.NORMAL_GAME:
				mx = this["normalGameMatrix"] || this["matrix"];
				break;
		}

		return mx;
	}
}


```
