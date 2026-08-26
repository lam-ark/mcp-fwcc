---
id: "cc_slot_mechanics:SlotCellSceneTest:recipes:practical"
title: "Recipe: Integrating SlotCellSceneTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `SlotCellSceneTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `SlotCellSceneTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { SlotCellSceneTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(SlotCellSceneTest);
if (mechanic) {
    mechanic.reset();
}
```
