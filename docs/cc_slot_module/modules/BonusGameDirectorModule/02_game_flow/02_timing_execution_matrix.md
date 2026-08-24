---
id: "cc_slot_module:BonusGameDirectorModule:game_flow:timing_execution_matrix"
title: "BonusGameDirectorModule Interactive Timing Matrix"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BonusGameDirectorModule Interactive Timing Matrix

## 1. Interactive Timing Matrix

| Phase / Action | Duration | Execution Mode | Behavior Under Turbo / Skip |
| :--- | :--- | :--- | :--- |
| **Countdown Timer** | `15s` (`defaultCountDown`) | Repeating 1s Tween | Cancelled immediately upon player click. |
| **Item Reveal Tween** | `1.0s` (`0.5s` delay + `0.5s` score) | Sequential Tween | Async Promise awaited in `_openFinalItem`. |
| **End Reveal Delay** | `3.0s` (`DELAY_OPEN_ALL_BOX`) | `scheduleOnce` | Unopened boxes reveal simultaneously with dimmed filters. |
| **Total Win Celebration** | Configured by Cutscene | Fullscreen Modal | Tap to fast-forward count-up. |
