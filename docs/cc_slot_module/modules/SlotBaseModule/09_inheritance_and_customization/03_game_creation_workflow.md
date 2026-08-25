---
id: "cc_slot_module:SlotBaseModule:inheritance:game_creation_workflow"
title: "SlotBaseModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 SlotBaseModule Game Creation Workflow

---

## 1. Step-by-Step Subclassing Workflow

1. Create a TypeScript class extending `SlotBaseModule`.
2. Add `@ccclass` decorator.
3. Implement `onLoadExtend()` to cache data models from `this.gameLogic.getDataModel()`.
4. Implement `registerEvents()` for event listening.
5. Implement `resetAllEffectAndTasks()` to clear VFX on new spin.
6. Implement `onDestroy()` for observer and event unsubscription.
