---
id: "cc_slot_mechanics:InfinityTableConfig:recipes:practical"
title: "Recipe: Integrating InfinityTableConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["InfinityTableConfig", "infinity_table_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `InfinityTableConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `InfinityTableConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { InfinityTableConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(InfinityTableConfig);
if (mechanic) {
    mechanic.reset();
}
```
