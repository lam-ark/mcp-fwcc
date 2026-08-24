---
id: "cc_slot_module:SlotTableNearWinModule:recipes:custom_anticipation_trigger_rules"
title: "Recipe: Custom Anticipation Rules for Scatter-Anywhere Games"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "recipes", "custom_rules"]
---

# 💡 Recipe: Custom Anticipation Rules for Scatter-Anywhere Games

---

## 1. Context & Use Case

In games where 3+ Scatter symbols can appear anywhere across columns 1 to 5 (not restricted to contiguous left-to-right columns), `_canWinFree(col)` must be customized so anticipation activates on any remaining column whenever 2 Scatters have already landed.

---

## 2. Implementation Subclass

```typescript
const { ccclass } = cc._decorator;
import { SlotTableNearWinModule } from "SlotTableNearWinModule";

@ccclass
export class ScatterAnywhereNearWinModule9666 extends SlotTableNearWinModule {
    _canWinFree(col: number): boolean {
        // As long as we need fewer scatters than remaining columns, we can win
        const remainingCols = 5 - (col + 1);
        const neededScatters = 3 - this._countScatter;
        return neededScatters <= remainingCols + 1;
    }
}
```
