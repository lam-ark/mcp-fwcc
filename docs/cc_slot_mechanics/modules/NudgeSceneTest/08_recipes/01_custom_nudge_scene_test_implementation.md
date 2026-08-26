---
id: "cc_slot_mechanics:NudgeSceneTest:recipes:custom_implementation"
title: "Recipe: Custom NudgeSceneTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom NudgeSceneTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { NudgeSceneTest } from 'assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeSceneTest';

@ccclass
export default class CustomNudgeSceneTest extends NudgeSceneTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
