---
id: "cc_slot_module:CutsceneController:game_flow:spin_phase_breakdown"
title: "CutsceneController Execution Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 CutsceneController Execution Across Spin Loop Phases

---

## 1. Spin Loop Phases

| Spin Phase | Controller Operation | Subsystem Coordination |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | Idle. | Ensures no lingering cutscene modals block the reel roll. |
| **Phase 2: Reels Stopped** | Evaluates win events; intercepts `PLAY_CUTSCENE` if Big Win, Free Spin, or Jackpot occurs. | Dispatches target modal and suspends `ScriptExecutor`. |
| **Phase 3: Celebration Loop** | Awaits modal resolution or handles `SKIP_CUTSCENES` from player taps. | Manages active modal queue. |
| **Phase 4: Settlement** | Resolves Promise upon modal `exit()`. | Pipeline proceeds to payline cycling or next spin. |
