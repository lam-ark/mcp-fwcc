---
id: "cc_slot_mechanics:MultiplierReelData:recipes:custom_implementation"
title: "Recipe: Custom MultiplierReelData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierReelData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierReelData } from 'assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelData';

@ccclass
export default class CustomMultiplierReelData extends MultiplierReelData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
