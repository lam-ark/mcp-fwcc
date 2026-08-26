---
id: "cc_slot_mechanics:HorizontalTableData:recipes:practical"
title: "Recipe: Integrating HorizontalTableData in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalTableData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalTableData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalTableData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalTableData);
if (mechanic) {
    mechanic.reset();
}
```
