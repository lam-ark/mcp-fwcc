---
id: "cc_slot_mechanics:InstantCashModule:recipes:custom_implementation"
title: "Recipe: Custom InstantCashModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InstantCashModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InstantCashModule } from 'assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashModule';

@ccclass
export default class CustomInstantCashModule extends InstantCashModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
