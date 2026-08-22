# HorizontalTableData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`HorizontalTableData`** extends `SlotTableData`

## Key Methods
- `onloadExtend(): void`
- `getMatrix(): string[][]`
- `getResumeMatrix(): string[][]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotTableData } from '../../../cc-slot-module/SlotModuleExport';
import { HorizontalTableConfig } from './HorizontalTableConfig';
const { ccclass } = _decorator;

@ccclass
export class HorizontalTableData extends SlotTableData {
	config: HorizontalTableConfig;

	/**
     * @key matrix0: matrix for current game mode before transform
     * @key matrix: matrix for current game mode after transform
     * @key normalGameMatrix: matrix for normal game mode when resume game
     * @key freeGameMatrix: matrix for free game mode when resume game
	 * @example ["2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]
	 * @type string[]
     */
	onloadExtend(): void {
		this.config = this.getComponent(HorizontalTableConfig);
	}

	getMatrix(): string[][] {
		let rawMatrix = this.getRawMatrix();
		if (!rawMatrix) {
			return [];
		}
		const horizontalSymbolIndexes = this.config.HORIZONTAL_SYMBOL_INDEXES;
		const horizontalMatrix = rawMatrix.filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);
		return [[...horizontalMatrix]];
	}

	getResumeMatrix(gameMode?: number): string[][] {
		const gameModeData = this.dataStore.getGameModeData(gameMode || this.gameMode);
		let rawMatrix = gameModeData.matrix || this.getRawResumeMatrix();
		if (!rawMatrix) {
			return [];
		}
		this.dataStore.setGameModeDataMap("matrix", rawMatrix);
		const horizontalSymbolIndexes = this.config.HORIZONTAL_SYMBOL_INDEXES;
		const horizontalMatrix = rawMatrix.filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);
		return [[...horizontalMatrix]];
	}
}


```
