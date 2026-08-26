---
id: "cc_slot_mechanics:NudgeSceneTest:recipes:practical"
title: "Recipe: Integrating NudgeSceneTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `NudgeSceneTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `NudgeSceneTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { NudgeSceneTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(NudgeSceneTest);
if (mechanic) {
    mechanic.reset();
}
```
