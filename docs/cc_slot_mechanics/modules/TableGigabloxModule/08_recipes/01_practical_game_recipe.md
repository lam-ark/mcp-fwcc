---
id: "cc_slot_mechanics:TableGigabloxModule:recipes:practical"
title: "Recipe: Integrating TableGigabloxModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TableGigabloxModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TableGigabloxModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TableGigabloxModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TableGigabloxModule);
if (mechanic) {
    mechanic.reset();
}
```
