---
id: "cc_slot_mechanics:SlotCellTableModule:recipes:practical"
title: "Recipe: Integrating SlotCellTableModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `SlotCellTableModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `SlotCellTableModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { SlotCellTableModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(SlotCellTableModule);
if (mechanic) {
    mechanic.reset();
}
```
