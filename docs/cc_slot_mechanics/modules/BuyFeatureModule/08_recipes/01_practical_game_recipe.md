---
id: "cc_slot_mechanics:BuyFeatureModule:recipes:practical"
title: "Recipe: Integrating BuyFeatureModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `BuyFeatureModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `BuyFeatureModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { BuyFeatureModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(BuyFeatureModule);
if (mechanic) {
    mechanic.reset();
}
```
