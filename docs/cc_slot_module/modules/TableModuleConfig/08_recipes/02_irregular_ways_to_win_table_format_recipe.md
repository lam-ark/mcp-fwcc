---
id: "cc_slot_module:TableModuleConfig:recipe:irregular_ways_to_win_table_format"
title: "Recipe: Configuring 720 Ways 3-4-5-4-3 Diamond Grid Layout"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "recipe", "ways_to_win", "diamond_grid"]
---

# 🍳 Recipe: Configuring 720 Ways 3-4-5-4-3 Diamond Grid Layout

## 1. Problem Statement
Configure a 720 Ways-to-Win slot game using a diamond format (`[3, 4, 5, 4, 3]`).

---

## 2. Configuration Setup

In `TableModuleConfig.ts`:
```typescript
@ccclass
export class DiamondTableConfig extends TableModuleConfig {
    public TABLE_FORMAT: number[] = [3, 4, 5, 4, 3];
    public SYMBOL_WIDTH: number = 140;
    public SYMBOL_HEIGHT: number = 130;
}
```
`SYMBOL_INDEXES` automatically generates the non-uniform mapping:
```typescript
// Col 0 (3 rows): [0, 1, 2]
// Col 1 (4 rows): [3, 4, 5, 6]
// Col 2 (5 rows): [7, 8, 9, 10, 11]
// Col 3 (4 rows): [12, 13, 14, 15]
// Col 4 (3 rows): [16, 17, 18]
```
`SlotSymbolManager` and `SlotTablePaylineModule` read these indexes automatically without manual hardcoding!
