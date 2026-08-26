---
id: "cc_slot_mechanics:CellTableData:recipes:practical"
title: "Recipe: Integrating CellTableData in Slot Games"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CellTableData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CellTableData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CellTableData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CellTableData);
if (mechanic) {
    mechanic.reset();
}
```
