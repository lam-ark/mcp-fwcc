# MultiplierData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Multiplier/scripts/MultiplierData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`MultiplierData`** extends `BaseDataModule`

## Key Methods
- `getMultiplier(): number`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class MultiplierData extends BaseDataModule {
	/**
     * @key multiplier: multiplier
	 * @type number
	 * @example 1
     */
	override registeredKeys: string[] = ['multiplier'];
	multiplier: number = 1;

	getMultiplier(): number {
		return this.multiplier || 1;
	}
}


```
