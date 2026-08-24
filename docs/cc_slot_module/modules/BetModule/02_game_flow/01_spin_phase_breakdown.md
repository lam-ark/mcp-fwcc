---
id: "cc_slot_module:BetModule:game_flow:spin_phase_breakdown"
title: "BetModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 BetModule Execution Across Spin Phases

---

## 1. Spin Loop Phases

| Spin Phase | BetModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Phase 1: Idle / Ready** | Steppers enabled based on `minBetEnable` / `maxBetEnable`. | Awaiting player input. |
| **Phase 2: Spin In Flight** | Steppers disabled (`interactable = false`). | Locked during reel roll. |
| **Phase 3: Mode Transition** | Locked during Free Spins; retains base wager. | Mode persistence. |
| **Phase 4: Settle & Re-arm** | Restores interactability to steppers. | Ready for next round. |
