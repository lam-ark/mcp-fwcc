---
id: "cc_slot_mechanics:SlotCellSceneTest:recipes:custom_implementation"
title: "Recipe: Custom SlotCellSceneTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom SlotCellSceneTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { SlotCellSceneTest } from 'assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/SlotCellSceneTest';

@ccclass
export default class CustomSlotCellSceneTest extends SlotCellSceneTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
