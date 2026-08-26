---
id: "cc_slot_mechanics:MultiplierData:recipes:custom_implementation"
title: "Recipe: Custom MultiplierData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierData", "multiplier_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierData } from 'assets/cc-common/cc-slot-mechanics/Multiplier/scripts/MultiplierData';

@ccclass
export default class CustomMultiplierData extends MultiplierData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
