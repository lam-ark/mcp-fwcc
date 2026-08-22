# TableGigabloxConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TableGigabloxConfig`** extends `TableModuleConfig`

## Source Implementation
```typescript
const { _decorator } = cc;
import { TableModuleConfig } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class TableGigabloxConfig extends TableModuleConfig {

	public readonly SYMBOL_WIDTH: number = 180;
	public readonly SYMBOL_HEIGHT: number = 160;
	// support for max 3x3 blox
	public readonly BUFFER_TOP: number = 3; // increase buffer when having mega symbol
	public readonly BUFFER_BOT: number = 3; // increase buffer when having mega symbol
	public readonly TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];
	public readonly RANDOM_SYMBOLS_CODE = [
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
	];
	public readonly EXCEPTION_SYMBOLS = ["A", "R"]; // for testing
}
```
