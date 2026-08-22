# MultiplierReelData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`MultiplierReelData`** extends `BaseDataModule`

## Key Methods
- `onDataUpdate(): void`
- `getMultiplierReel(): number`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class MultiplierReelData extends BaseDataModule {
	/**
     * @key normalMultipliers: multipliers for normal game
	 * @type number[]
	 * @example [2, 2, 1, 1, 5]
     * @key freeMultipliers: multipliers for free game
	 * @type number[]
	 * @example [2, 1, 1, 1, 5]
     */
	override registeredKeys: string[] = ['normalMultipliers', 'freeMultipliers'];
	multiplierReel: number[] = [];

	onDataUpdate(key: string, value: any): void {
		super.onDataUpdate(key, value);
		this.multiplierReel = this['normalMultipliers'] || this['freeMultipliers'] || [];
	}

	getMultiplierReel(index: number): number {
		return this.multiplierReel[index] || 1;
	}
}
```
