---
id: "cc_slot_mechanics:TumblingTableConfig:recipes:practical"
title: "Recipe: Integrating TumblingTableConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TumblingTableConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TumblingTableConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TumblingTableConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TumblingTableConfig);
if (mechanic) {
    mechanic.reset();
}
```
