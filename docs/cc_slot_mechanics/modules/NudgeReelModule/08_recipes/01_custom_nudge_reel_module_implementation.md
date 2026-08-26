---
id: "cc_slot_mechanics:NudgeReelModule:recipes:custom_implementation"
title: "Recipe: Custom NudgeReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom NudgeReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { NudgeReelModule } from 'assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule';

@ccclass
export default class CustomNudgeReelModule extends NudgeReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
