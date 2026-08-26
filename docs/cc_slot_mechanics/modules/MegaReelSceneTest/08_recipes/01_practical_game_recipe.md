---
id: "cc_slot_mechanics:MegaReelSceneTest:recipes:practical"
title: "Recipe: Integrating MegaReelSceneTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MegaReelSceneTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MegaReelSceneTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MegaReelSceneTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MegaReelSceneTest);
if (mechanic) {
    mechanic.reset();
}
```
