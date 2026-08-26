---
id: "cc_slot_mechanics:BuyFeatureConfig:recipes:custom_implementation"
title: "Recipe: Custom BuyFeatureConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["BuyFeatureConfig", "buy_feature_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom BuyFeatureConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { BuyFeatureConfig } from 'assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureConfig';

@ccclass
export default class CustomBuyFeatureConfig extends BuyFeatureConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
