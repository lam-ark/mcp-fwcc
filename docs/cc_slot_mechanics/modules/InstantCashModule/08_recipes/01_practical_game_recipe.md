---
id: "cc_slot_mechanics:InstantCashModule:recipes:practical"
title: "Recipe: Integrating InstantCashModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `InstantCashModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `InstantCashModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { InstantCashModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(InstantCashModule);
if (mechanic) {
    mechanic.reset();
}
```
