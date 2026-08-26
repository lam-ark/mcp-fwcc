---
id: "cc_slot_mechanics:MultiplierReel:recipes:custom_implementation"
title: "Recipe: Custom MultiplierReel Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierReel Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierReel } from 'assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReel';

@ccclass
export default class CustomMultiplierReel extends MultiplierReel {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
