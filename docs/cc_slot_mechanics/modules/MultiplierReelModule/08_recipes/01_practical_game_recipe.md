---
id: "cc_slot_mechanics:MultiplierReelModule:recipes:practical"
title: "Recipe: Integrating MultiplierReelModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MultiplierReelModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MultiplierReelModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MultiplierReelModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MultiplierReelModule);
if (mechanic) {
    mechanic.reset();
}
```
