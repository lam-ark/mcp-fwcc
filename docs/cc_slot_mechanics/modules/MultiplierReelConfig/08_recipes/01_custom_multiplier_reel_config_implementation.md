---
id: "cc_slot_mechanics:MultiplierReelConfig:recipes:custom_implementation"
title: "Recipe: Custom MultiplierReelConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReelConfig", "multiplier_reel_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierReelConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierReelConfig } from 'assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelConfig';

@ccclass
export default class CustomMultiplierReelConfig extends MultiplierReelConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
