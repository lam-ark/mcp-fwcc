---
id: "cc_slot_mechanics:TableGigabloxData:recipes:practical"
title: "Recipe: Integrating TableGigabloxData in Slot Games"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TableGigabloxData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TableGigabloxData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TableGigabloxData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TableGigabloxData);
if (mechanic) {
    mechanic.reset();
}
```
