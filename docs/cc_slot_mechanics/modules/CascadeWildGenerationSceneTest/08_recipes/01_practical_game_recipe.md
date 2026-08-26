---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:recipes:practical"
title: "Recipe: Integrating CascadeWildGenerationSceneTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CascadeWildGenerationSceneTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CascadeWildGenerationSceneTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CascadeWildGenerationSceneTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CascadeWildGenerationSceneTest);
if (mechanic) {
    mechanic.reset();
}
```
