---
id: "cc_slot_module:BaseCutscene:game_flow:spin_phase_breakdown"
title: "BaseCutscene Modal Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 BaseCutscene Modal Execution Across Spin Phases

---

## 1. Spin Loop Phases

| Spin Phase | BaseCutscene Action | Impact on Background Systems |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | Idle (`active = false`). | Normal game reels and HUD active. |
| **Phase 2: Reels Stopped** | Triggered if win exceeds threshold or triggers mode transition. | Background dimmed; input events blocked via `SHOW_FULL_DISPLAY_CUTSCENE`. |
| **Phase 3: Celebration Loop** | `enter()` runs tweens, coin particles, audio. | Player can tap to skip. |
| **Phase 4: Exit & Settlement** | `exit()` fires callback, re-enables HUD inputs. | ScriptExecutor advances to next command. |
