---
id: "cc_slot_mechanics:TableGigabloxConfig:recipes:practical"
title: "Recipe: Integrating TableGigabloxConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["TableGigabloxConfig", "table_gigablox_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TableGigabloxConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TableGigabloxConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TableGigabloxConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TableGigabloxConfig);
if (mechanic) {
    mechanic.reset();
}
```
