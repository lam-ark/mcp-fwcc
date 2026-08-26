---
id: "cc_slot_mechanics:HorizontalReelModule:recipes:custom_implementation"
title: "Recipe: Custom HorizontalReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalReelModule } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule';

@ccclass
export default class CustomHorizontalReelModule extends HorizontalReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
