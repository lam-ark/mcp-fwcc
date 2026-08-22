# HorizontalCascadeModuleConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeModuleConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`HorizontalCascadeModuleConfig`** extends `CascadeModuleConfig`

## Source Implementation
```typescript
const { _decorator, Vec2 } = cc;
import { CascadeModuleConfig } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class HorizontalCascadeModuleConfig extends CascadeModuleConfig {
    public readonly CASCADE_TABLE_CONFIG = {
        format: [1, 1, 1, 1, 1],
        cellSize: new Vec2(180, 160),
        positions: [],
    };
}

```
