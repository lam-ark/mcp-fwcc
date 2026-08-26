---
id: "cc_slot_mechanics:BuyFeatureButton:recipes:practical"
title: "Recipe: Integrating BuyFeatureButton in Slot Games"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `BuyFeatureButton` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `BuyFeatureButton` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { BuyFeatureButton } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(BuyFeatureButton);
if (mechanic) {
    mechanic.reset();
}
```
