# InfinityTableConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`InfinityTableConfig`** extends `TableModuleConfig`

## Source Implementation
```typescript
const { _decorator } = cc;
import { TableModuleConfig } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class InfinityTableConfig extends TableModuleConfig {
    public readonly TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];
	public readonly RANDOM_SYMBOLS_CODE = [
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
	];
    public EXTENDE_REEL_DELAY_STOP: number = 2; // in second
}


```
