---
id: "cc_slot_mechanics:MegaReelModule:recipes:custom_implementation"
title: "Recipe: Custom MegaReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegaReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegaReelModule } from 'assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelModule';

@ccclass
export default class CustomMegaReelModule extends MegaReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
