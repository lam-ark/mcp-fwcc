---
id: "cc_slot_mechanics:InfinityReelModule:recipes:custom_implementation"
title: "Recipe: Custom InfinityReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityReelModule } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityReelModule';

@ccclass
export default class CustomInfinityReelModule extends InfinityReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
