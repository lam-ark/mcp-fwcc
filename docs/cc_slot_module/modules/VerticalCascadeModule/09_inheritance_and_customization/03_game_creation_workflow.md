---
id: "cc_slot_module:VerticalCascadeModule:inheritance:game_creation_workflow"
title: "VerticalCascadeModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 VerticalCascadeModule Game Creation Setup Workflow

---

## 1. Step-by-Step Setup

1. In Cocos Creator, create a `CascadeModule` node inside `MainGamePrefab`.
2. Attach `VerticalCascadeModule`, `CascadeModuleData`, `CascadeModuleConfig`, and `SlotModuleEditorTag`.
3. Assign `container` to a dedicated layer node under table mask.
4. Wire `symbolManager` to `SlotSymbolManager`.
5. Verify script sequence in mode writer (`TABLE_START_RESPIN` ➔ `TABLE_STOP_RESPIN`).
