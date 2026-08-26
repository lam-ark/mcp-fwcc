---
id: "cc_slot_mechanics:BuyFeatureConfig:recipes:practical"
title: "Recipe: Integrating BuyFeatureConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["BuyFeatureConfig", "buy_feature_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `BuyFeatureConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `BuyFeatureConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { BuyFeatureConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(BuyFeatureConfig);
if (mechanic) {
    mechanic.reset();
}
```
