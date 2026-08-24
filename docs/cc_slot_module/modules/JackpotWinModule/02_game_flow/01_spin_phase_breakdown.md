---
id: "cc_slot_module:JackpotWinModule:game_flow:spin_phase_breakdown"
title: "JackpotWinModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 JackpotWinModule Execution Across Spin Phases

---

## 1. Spin Loop Phases

| Spin Phase | JackpotWinModule Action | Subsystem Impact |
| :--- | :--- | :--- |
| **Phase 1: Spin Roll** | Idle (`active = false`). | Hidden. |
| **Phase 2: Jackpot Hit** | Triggered by backend jackpot payload. | HUD buttons locked; full screen modal displayed. |
| **Phase 3: Roll & Accelerate**| Counts over $10\text{s}$ (or accelerates to $1\text{s}$ on tap). | Coins shower, major fanfare audio plays. |
| **Phase 4: Finish** | Displays formatted cash total and exits. | ScriptExecutor resumes next step. |
