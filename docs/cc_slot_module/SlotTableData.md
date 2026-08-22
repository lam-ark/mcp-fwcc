# SlotTableData

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotTableData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `getMatrix(): string[][]`
- `getRawMatrix(): string[]`
- `getRawResumeMatrix(): string[]`
- `getResumeMatrix(): string[][]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from "../../../../Core/BaseDataModule";
import { TableModuleConfig } from "./TableModuleConfig";
const { ccclass } = _decorator;

@ccclass
export class SlotTableData extends BaseDataModule {
	config: TableModuleConfig = null;

	/**
     * @key matrix0: matrix for current game mode before transform
     * @key matrix: matrix for current game mode after transform
     * @key normalGameMatrix: matrix for normal game mode when resume game
     * @key freeGameMatrix: matrix for free game mode when resume game
	 * @example ["2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]
	 * @type string[]
     */
	registeredKeys = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix"];

	onloadExtend(): void {
		this.config = this.getComponent(TableModuleConfig);
	}

	getMatrix(): string[][] {
		let rawMatrix = this.getRawMatrix();
		return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}

	getRawMatrix(): string[] {
		if (this.isFreeMode()) {
			return this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
		}

		return this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
	}

	getRawResumeMatrix(): string[] {
		if (this.isFreeMode()) {
			return this["freeGameMatrix"] || this["matrix"];
		}

		return this["normalGameMatrix"] || this["matrix"];
	}

	getResumeMatrix(gameMode?: number): string[][] {
		const gameModeData = this.dataStore.getGameModeData(gameMode || this.gameMode);
		let rawMatrix = gameModeData.matrix || this.getRawResumeMatrix();
		this.dataStore.setGameModeDataMap("matrix", rawMatrix);
 		return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}
}

```
