---
id: "cc_slot_module:systems:cutscenes_and_celebration_system:custom_cutscene_creation_guide"
title: "Step-by-Step Custom Cutscene Creation & Registration Guide"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cutscenes", "custom_cutscene", "creation_guide", "tutorial"]
---

# 🚀 Step-by-Step Custom Cutscene Creation & Registration Guide

---

## 1. Step-by-Step Workflow

1. **Subclass `BaseCutscene`**:
   - Create a TypeScript class extending `BaseCutscene`.
   - Set `@property({ type: CUTSCENE_TYPE_ENUM }) cutsceneType = CUTSCENE_TYPE_ENUM.MY_CUSTOM_TYPE;`.
2. **Implement `enter()` and `exit()`**:
   - In `enter()`, start your custom Spine/Tween animations and number count-ups.
   - When finished, invoke `this.exit()`.
3. **Mount Under `Canvas/Director/CutsceneControl` in Scene**:
   - Add your node as a direct child of `CutsceneControl`.
   - `CutsceneController` will automatically discover and register it in `makeCutSceneList()`.
4. **Trigger via Event / Writer**:
   ```typescript
   this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, {
       cutsceneType: CUTSCENE_TYPE_ENUM.MY_CUSTOM_TYPE,
       cutsceneData: { winAmount: 500000 }
   });
   ```
