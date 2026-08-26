---
id: "cc_slot_mechanics:BuyFeatureButton:recipes:custom_implementation"
title: "Recipe: Custom BuyFeatureButton Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom BuyFeatureButton Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { BuyFeatureButton } from 'assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureButton';

@ccclass
export default class CustomBuyFeatureButton extends BuyFeatureButton {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
