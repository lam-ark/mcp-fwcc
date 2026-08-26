---
id: "cc_slot_mechanics:MultiplierReel:recipes:practical"
title: "Recipe: Integrating MultiplierReel in Slot Games"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MultiplierReel` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MultiplierReel` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MultiplierReel } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MultiplierReel);
if (mechanic) {
    mechanic.reset();
}
```
