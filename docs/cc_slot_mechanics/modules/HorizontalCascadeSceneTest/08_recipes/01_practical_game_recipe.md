---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:recipes:practical"
title: "Recipe: Integrating HorizontalCascadeSceneTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalCascadeSceneTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalCascadeSceneTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalCascadeSceneTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalCascadeSceneTest);
if (mechanic) {
    mechanic.reset();
}
```
