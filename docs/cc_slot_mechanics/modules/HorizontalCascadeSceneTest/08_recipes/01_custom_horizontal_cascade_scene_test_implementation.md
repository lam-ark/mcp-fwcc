---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:recipes:custom_implementation"
title: "Recipe: Custom HorizontalCascadeSceneTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalCascadeSceneTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalCascadeSceneTest } from 'assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeSceneTest';

@ccclass
export default class CustomHorizontalCascadeSceneTest extends HorizontalCascadeSceneTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
