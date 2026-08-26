---
id: "cc_slot_mechanics:TumblingReelModule:recipes:custom_implementation"
title: "Recipe: Custom TumblingReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TumblingReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TumblingReelModule } from 'assets/cc-common/cc-slot-mechanics/TumblingReel/scripts/TumblingReelModule';

@ccclass
export default class CustomTumblingReelModule extends TumblingReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
