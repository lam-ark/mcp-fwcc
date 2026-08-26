---
id: "cc_slot_mechanics:MultiplierReelData:recipes:practical"
title: "Recipe: Integrating MultiplierReelData in Slot Games"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MultiplierReelData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MultiplierReelData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MultiplierReelData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MultiplierReelData);
if (mechanic) {
    mechanic.reset();
}
```
