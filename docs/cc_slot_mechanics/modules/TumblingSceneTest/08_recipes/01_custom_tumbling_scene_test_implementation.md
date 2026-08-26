---
id: "cc_slot_mechanics:TumblingSceneTest:recipes:custom_implementation"
title: "Recipe: Custom TumblingSceneTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingSceneTest", "tumbling_scene_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TumblingSceneTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TumblingSceneTest } from 'assets/cc-common/cc-slot-mechanics/TumblingReel/scripts/TumblingSceneTest';

@ccclass
export default class CustomTumblingSceneTest extends TumblingSceneTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
