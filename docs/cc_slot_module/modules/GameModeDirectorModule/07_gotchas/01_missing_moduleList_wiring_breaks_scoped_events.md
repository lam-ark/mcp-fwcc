---
id: "cc_slot_module:GameModeDirectorModule:gotcha:missing_moduleList_wiring"
title: "Gotcha: Missing moduleList Wiring Breaks Scoped Event Bus"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "gotchas", "moduleList", "GameModuleEvent"]
---

# 🛑 Gotcha: Missing `moduleList` Wiring Breaks Scoped Event Bus

## 1. Symptom & Defect
When clicking the Spin button, the spin button transitions into `SPINNING` state, but the reels never turn, or payline animations never render.

---

## 2. Root Cause & Technical Defect
`SlotTableModule` and `PaylineModule` communicate with the director through `this.moduleEvent`. If these child nodes are not in the director's `moduleList` array, `setupModules()` never assigns `this.moduleEvent` to them, leaving them disconnected from all spin commands.

---

## 3. Standard Code Solution & Fix
Ensure all sibling visual controllers are dragged into the `moduleList` array in the Cocos Creator Inspector on the mode director node.
