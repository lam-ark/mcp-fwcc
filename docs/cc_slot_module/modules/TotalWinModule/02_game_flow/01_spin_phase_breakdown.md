---
id: "cc_slot_module:TotalWinModule:game_flow:spin_phase_breakdown"
title: "TotalWinModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 TotalWinModule Execution Across Spin Phases

---

## 1. Spin Loop Phases

| Spin Phase | TotalWinModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Phase 1: Free Game Spins** | Idle (`active = false`). | Hidden. |
| **Phase 2: Free Game End** | Triggered when remaining spins reach 0. | Suspends spin loop, displays total sum payout. |
| **Phase 3: Count & Tally** | Counts up accumulated win. | Audio victory jingle plays. |
| **Phase 4: Return to Base** | Closes and resolves callback. | Directs game to switch mode back to `NormalGame`. |
