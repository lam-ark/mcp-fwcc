---
id: "cc_slot_mechanics:SlotTableMegaModule:recipes:practical"
title: "Recipe: Integrating SlotTableMegaModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `SlotTableMegaModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `SlotTableMegaModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { SlotTableMegaModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(SlotTableMegaModule);
if (mechanic) {
    mechanic.reset();
}
```
