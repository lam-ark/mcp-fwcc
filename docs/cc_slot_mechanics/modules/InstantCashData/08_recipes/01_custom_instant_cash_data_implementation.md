---
id: "cc_slot_mechanics:InstantCashData:recipes:custom_implementation"
title: "Recipe: Custom InstantCashData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InstantCashData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InstantCashData } from 'assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashData';

@ccclass
export default class CustomInstantCashData extends InstantCashData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
