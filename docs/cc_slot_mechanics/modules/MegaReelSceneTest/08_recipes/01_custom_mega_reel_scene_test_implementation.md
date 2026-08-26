---
id: "cc_slot_mechanics:MegaReelSceneTest:recipes:custom_implementation"
title: "Recipe: Custom MegaReelSceneTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegaReelSceneTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegaReelSceneTest } from 'assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelSceneTest';

@ccclass
export default class CustomMegaReelSceneTest extends MegaReelSceneTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
