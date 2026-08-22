# InfinityTableData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`InfinityTableData`** extends `SlotTableData`

## Key Methods
- `getResumeMatrix(): string[][]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotTableData } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class InfinityTableData extends SlotTableData {
    /**
     * @key matrix0: matrix for current game mode before transform
     * @key matrix: matrix for current game mode after transform
     * @key normalGameMatrix: matrix for normal game mode when resume game
     * @key freeGameMatrix: matrix for free game mode when resume game
	 * @example ["2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]
     * @type string[]
     */
    getResumeMatrix(gameMode?: number): string[][] {
		const gameModeData = this.dataStore.getGameModeData(gameMode || this.gameMode);
		let rawMatrix = gameModeData.matrix || this.getRawResumeMatrix();
		this.dataStore.setGameModeDataMap("matrix", rawMatrix);
        
        if (rawMatrix && rawMatrix.length) {
            const totalRows = this.config.TABLE_FORMAT[0];
            const totalReels = Math.floor(rawMatrix.length / totalRows);
            const format = new Array(totalReels).fill(totalRows);
            return eno.SlotUtils.convertSlotMatrix(rawMatrix, format);
        }
        
        return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}
}


```
