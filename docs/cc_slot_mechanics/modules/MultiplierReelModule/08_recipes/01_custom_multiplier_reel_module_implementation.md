---
id: "cc_slot_mechanics:MultiplierReelModule:recipes:custom_implementation"
title: "Recipe: Custom MultiplierReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierReelModule } from 'assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelModule';

@ccclass
export default class CustomMultiplierReelModule extends MultiplierReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
