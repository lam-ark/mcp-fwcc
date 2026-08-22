# InstantCashData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`InstantCashData`** extends `BaseDataModule`

## Key Methods
- `getInstantCashMultiplier(): number`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class InstantCashData extends BaseDataModule {
	/**
     * @key instantCashMultiplier: instant cash multiplier
	 * @type number
	 * @example 1
     */
	override registeredKeys: string[] = ['instantCashMultiplier'];
	instantCashMultiplier: number = 1;

	getInstantCashMultiplier(): number {
		return this.instantCashMultiplier || 1;
	}
}


```
