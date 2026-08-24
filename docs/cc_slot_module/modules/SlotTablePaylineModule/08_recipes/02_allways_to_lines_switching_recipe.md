---
id: "cc_slot_module:SlotTablePaylineModule:recipes:allways_to_lines_switching_recipe"
title: "Recipe: Dynamic AllWays to Fixed-Lines Mode Switching"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "recipes", "allways", "fixed_lines"]
---

# 💡 Recipe: Dynamic AllWays to Fixed-Lines Mode Switching

---

## 1. Context & Use Case

In games where the Base Game uses 243 AllWays, but the Free Game switches to 20 Fixed Paylines with custom line drawing overlays.

---

## 2. Implementation

```typescript
const { ccclass } = cc._decorator;
import { SlotTablePaylineModule } from "SlotTablePaylineModule";
import { PAYLINE_TYPE } from "PaylineTypes";

@ccclass
export class DynamicPaylineTypeModule extends SlotTablePaylineModule {
    protected registerEvents(): void {
        super.registerEvents();
        this.moduleEvent.on("SWITCH_PAYLINE_TYPE", this.onSwitchPaylineType, this);
    }

    private onSwitchPaylineType(data: { paylineType: PAYLINE_TYPE }): void {
        this.paylineConfig.PAYLINE_TYPE = data.paylineType;
    }
}
```
