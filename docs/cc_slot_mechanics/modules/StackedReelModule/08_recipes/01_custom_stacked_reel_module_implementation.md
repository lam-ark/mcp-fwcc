---
id: "cc_slot_mechanics:StackedReelModule:recipes:custom_implementation"
title: "Recipe: Custom StackedReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom StackedReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { StackedReelModule } from 'assets/cc-common/cc-slot-mechanics/StackedReel/StackedReelModule';

@ccclass
export default class CustomStackedReelModule extends StackedReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
