---
id: "cc_slot_mechanics:MegaReelConfig:recipes:custom_implementation"
title: "Recipe: Custom MegaReelConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelConfig", "mega_reel_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegaReelConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegaReelConfig } from 'assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelConfig';

@ccclass
export default class CustomMegaReelConfig extends MegaReelConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
