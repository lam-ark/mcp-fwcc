---
id: "cc_slot_mechanics:BuyFeatureModule:recipes:custom_implementation"
title: "Recipe: Custom BuyFeatureModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom BuyFeatureModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { BuyFeatureModule } from 'assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureModule';

@ccclass
export default class CustomBuyFeatureModule extends BuyFeatureModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
