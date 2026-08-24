---
id: "cc_slot_module:BonusGameTableModule:recipe:custom_grid_layout"
title: "Recipe: Circular Radial Chest Grid Layout"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "recipe", "circular_layout"]
---

# 🍳 Recipe: Circular Radial Chest Grid Layout

## 1. Problem Statement
You need to arrange 8 clickable items in a circular wheel formation around a center mascot instead of a standard rectangular grid.

---

## 2. Step-by-Step Implementation

### Step 1: Override `getPosByIndex`
```typescript
@ccclass
export class RadialBonusGameTableModule extends BonusGameTableModule {
    @property
    radius: number = 300;

    override getPosByIndex(index: number): cc.Vec3 {
        const totalItems = this._config.COL_NUMBER * this._config.ROW_NUMBER;
        const angle = (index / totalItems) * Math.PI * 2;
        const x = Math.cos(angle) * this.radius;
        const y = Math.sin(angle) * this.radius;
        return cc.v3(x, y, 0);
    }
}
```
