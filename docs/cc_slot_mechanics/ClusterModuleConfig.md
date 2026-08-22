# ClusterModuleConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModuleConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`ClusterModuleConfig`** extends `CascadeModuleConfig`

## Source Implementation
```typescript
const { _decorator, Vec2 } = cc;
import { CascadeModuleConfig } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class ClusterModuleConfig extends CascadeModuleConfig {

	public readonly CASCADE_TABLE_CONFIG = {
		format: [4, 4, 4, 4, 4, 4],
		cellSize: new Vec2(140, 110),
		positions: [],
	}
}
```
