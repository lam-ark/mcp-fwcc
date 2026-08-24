---
id: "cc_slot_module:JackpotModule:game_flow:spin_phase_breakdown"
title: "JackpotModule Execution Across Game Modes"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 JackpotModule Execution Across Game Modes

---

## 1. Game Flow Breakdown

| State / Mode | Jackpot Module Action | Behavior |
| :--- | :--- | :--- |
| **Idle Normal Game** | Progressive rolling active. | Smooth $3.0\text{s}$ interpolation. |
| **Jackpot Trigger** | `pauseJackpot()` | Freezes pool updates during win overlay. |
| **Jackpot Concludes**| `resumeJackpot(true)` | Force syncs reset starting base pool. |
| **Trial Mode Active** | Replaced by `trialJackpot` node. | Displays fixed simulated demo jackpots. |
