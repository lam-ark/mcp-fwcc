---
id: "cc_slot_mechanics:HorizontalTableTest:recipes:practical"
title: "Recipe: Integrating HorizontalTableTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalTableTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalTableTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalTableTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalTableTest);
if (mechanic) {
    mechanic.reset();
}
```
