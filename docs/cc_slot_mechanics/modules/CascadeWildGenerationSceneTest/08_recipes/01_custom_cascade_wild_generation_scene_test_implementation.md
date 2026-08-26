---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:recipes:custom_implementation"
title: "Recipe: Custom CascadeWildGenerationSceneTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CascadeWildGenerationSceneTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CascadeWildGenerationSceneTest } from 'assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationSceneTest';

@ccclass
export default class CustomCascadeWildGenerationSceneTest extends CascadeWildGenerationSceneTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
