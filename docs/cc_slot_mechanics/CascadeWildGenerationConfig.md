# CascadeWildGenerationConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CascadeWildGenerationConfig`** extends `CascadeModuleConfig`

## Source Implementation
```typescript
const { _decorator, Vec2 } = cc;
import { CascadeModuleConfig } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class CascadeWildGenerationConfig extends CascadeModuleConfig {

	public readonly CASCADE_TABLE_CONFIG = {
		format: [3, 3, 3, 3, 3],
		cellSize: new Vec2(180, 160),
		positions: [],
	}
}
```
