# CellTableConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CellTableConfig`** extends `TableModuleConfig`

## Source Implementation
```typescript
const { _decorator, Size, Vec2 } = cc;
import { TableModuleConfig } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class CellTableConfig extends TableModuleConfig {
	public readonly SYMBOL_WIDTH: number = 180;
	public readonly SYMBOL_HEIGHT: number = 160;
	public readonly SYMBOL_MASK_SIZE: cc.Size = new Size(180, 160);
	public readonly BUFFER_TOP: number = 1;
	public readonly BUFFER_BOT: number = 1;
	public readonly TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];
	public readonly RANDOM_SYMBOLS_CODE = [
		["10", "A", "A1", "A2", "J"],
		["10", "A", "A1", "A2", "J"],
		["10", "A", "A1", "A2", "J"],
		["10", "A", "A1", "A2", "J"],
		["10", "A", "A1", "A2", "J"],
	];
	public readonly EXCEPTION_SYMBOLS = [];
	public readonly DEFAULT_SIZE = Vec2.ONE;
	public readonly SCATTER = 'A';
	public readonly SCATTER1 = 'A1';
	public readonly SCATTER2 = 'A2';
}


```
