---
id: "cc_slot_mechanics:MultiplierModule:recipes:practical"
title: "Recipe: Integrating MultiplierModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MultiplierModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MultiplierModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MultiplierModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MultiplierModule);
if (mechanic) {
    mechanic.reset();
}
```
