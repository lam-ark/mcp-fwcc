# MegaReelConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`MegaReelConfig`** extends `TableModuleConfig`

## Source Implementation
```typescript
const { _decorator, Vec2 } = cc;
import { TableModuleConfig } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class MegaReelConfig extends TableModuleConfig {
    
    public readonly MEGA_SYMBOL_CODE: string = 'K_2';
    public readonly MEGA_SIZE: cc.Vec2 = new Vec2(2, 2);
    public readonly TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];
}


```
