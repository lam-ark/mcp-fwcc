---
id: "cc_slot_mechanics:MultiplierModule:recipes:custom_implementation"
title: "Recipe: Custom MultiplierModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierModule } from 'assets/cc-common/cc-slot-mechanics/Multiplier/scripts/MultiplierModule';

@ccclass
export default class CustomMultiplierModule extends MultiplierModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
