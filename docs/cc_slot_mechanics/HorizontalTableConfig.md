# HorizontalTableConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`HorizontalTableConfig`** extends `TableModuleConfig`

## Key Methods
- `SYMBOL_INDEXES(): number[][]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { TableModuleConfig } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class HorizontalTableConfig extends TableModuleConfig {
	public readonly BUFFER_LEFT: number = 1;
	public readonly BUFFER_RIGHT: number = 1;

	public readonly HORIZONTAL_SYMBOL_INDEXES: number[] = [0, 1, 2, 3, 4];
	public get SYMBOL_INDEXES(): number[][] {
		return [[0, 1, 2, 3, 4]];
	}
	public override readonly TABLE_FORMAT: number[] = [5];

}
```
