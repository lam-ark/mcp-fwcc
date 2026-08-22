# TableModuleConfigTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/TableModuleConfigTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TableModuleConfigTest`** extends `TableModuleConfig`

## Source Implementation
```typescript
const { _decorator } = cc;
import { TableModuleConfig } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class TableModuleConfigTest extends TableModuleConfig {
	public readonly SYMBOL_WIDTH: number = 180;
	public readonly SYMBOL_HEIGHT: number = 160;
	public readonly TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];
    public readonly RANDOM_SYMBOLS_CODE = [
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
	];
}
```
