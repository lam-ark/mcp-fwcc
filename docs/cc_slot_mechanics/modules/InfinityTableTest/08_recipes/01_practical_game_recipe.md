---
id: "cc_slot_mechanics:InfinityTableTest:recipes:practical"
title: "Recipe: Integrating InfinityTableTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `InfinityTableTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `InfinityTableTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { InfinityTableTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(InfinityTableTest);
if (mechanic) {
    mechanic.reset();
}
```
