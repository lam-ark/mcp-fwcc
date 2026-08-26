---
id: "cc_slot_mechanics:InstantCashData:recipes:practical"
title: "Recipe: Integrating InstantCashData in Slot Games"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `InstantCashData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `InstantCashData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { InstantCashData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(InstantCashData);
if (mechanic) {
    mechanic.reset();
}
```
