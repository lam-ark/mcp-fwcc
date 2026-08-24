---
id: "cc_slot_module:IntroFreeGameModule:game_flow:spin_phase_breakdown"
title: "IntroFreeGameModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 IntroFreeGameModule Execution Across Spin Phases

---

## 1. Spin Loop Phases

| Spin Phase | IntroFreeGameModule Status | Purpose |
| :--- | :--- | :--- |
| **Phase 1: Normal Spin** | Inactive (`active = false`). | Hidden. |
| **Phase 2: Free Game Trigger**| Scatter hits evaluate $\ge 3$. | Invoked via `PLAY_CUTSCENE` to show Free Spin awards. |
| **Phase 3: Countdown** | Active for `timeShow` ($2\text{s}$). | Audio transition fanfare plays. |
| **Phase 4: Mode Switch** | Calls `exit()`. | Game switches active background to Free Game theme. |
