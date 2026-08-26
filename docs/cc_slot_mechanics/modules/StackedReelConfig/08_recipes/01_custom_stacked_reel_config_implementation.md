---
id: "cc_slot_mechanics:StackedReelConfig:recipes:custom_implementation"
title: "Recipe: Custom StackedReelConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["StackedReelConfig", "stacked_reel_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom StackedReelConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { StackedReelConfig } from 'assets/cc-common/cc-slot-mechanics/StackedReel/StackedReelConfig';

@ccclass
export default class CustomStackedReelConfig extends StackedReelConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
