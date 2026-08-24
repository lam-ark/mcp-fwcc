---
id: "cc_slot_module:ExtraBetModule:game_flow:spin_phase_breakdown"
title: "ExtraBetModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 ExtraBetModule Spin Phase Breakdown

---

## 1. Spin Phase Cycle

| Phase | ExtraBetModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Idle** | Enabled if `min/maxExtraBetEnable` allows. | Awaiting modifier adjustments. |
| **Spinning** | Locked (`interactable = false`). | Fixed during reel spins. |
| **Free Games** | Hidden/disabled (`UIManagerModule.showFreeUIElements`). | Disabled in free rounds. |
| **Settle** | Re-enabled for next round. | Restores state. |
