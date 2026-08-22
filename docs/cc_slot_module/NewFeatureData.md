# NewFeatureData

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/templates/scripts/NewFeatureData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`NewFeatureData`** extends `BaseDataModule`

## Key Methods
- `getMatrix(): string[][]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from "../../../Core/BaseDataModule";
const { ccclass } = _decorator;

@ccclass
export class NewFeatureData extends BaseDataModule {
	// Register the data to use
	registeredKeys = ["matrix", "wallet"];

	// write function to get data
	getMatrix(): string[][] {
		return this["matrix"];
	}
}

```
