---
id: "cc_slot_mechanics:TumblingSceneTest:recipes:practical"
title: "Recipe: Integrating TumblingSceneTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["TumblingSceneTest", "tumbling_scene_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TumblingSceneTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TumblingSceneTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TumblingSceneTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TumblingSceneTest);
if (mechanic) {
    mechanic.reset();
}
```
