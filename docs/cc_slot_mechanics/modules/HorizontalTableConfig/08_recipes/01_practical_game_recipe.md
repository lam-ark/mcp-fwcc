---
id: "cc_slot_mechanics:HorizontalTableConfig:recipes:practical"
title: "Recipe: Integrating HorizontalTableConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalTableConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalTableConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalTableConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalTableConfig);
if (mechanic) {
    mechanic.reset();
}
```
