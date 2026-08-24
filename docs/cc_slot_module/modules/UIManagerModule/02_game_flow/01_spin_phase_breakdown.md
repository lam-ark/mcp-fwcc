---
id: "cc_slot_module:UIManagerModule:game_flow:spin_phase_breakdown"
title: "UIManagerModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 UIManagerModule Execution Across Spin Phases

---

## 1. Spin Loop Phases

| Spin Phase | UIManagerModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Phase 1: Spin Trigger** | Blocks bet adjustments, updates spin button state. | Directs `BetModule` and `TurboButton`. |
| **Phase 2: Reels Rolling** | Manages `isSpinVisible` and evaluates `checkDisplayPopup()`. | Coordinates with `CutsceneController`. |
| **Phase 3: Mode Transition** | Executes `updateGameModeUI(newMode)` to swap HUD elements. | Syncs with `GameModeDirectorModule`. |
| **Phase 4: Settle & Idle** | Restores interactability to bet step buttons. | Unlocks player dashboard. |
