---
id: "cc_slot_module:WinAmountModule:game_flow:spin_phase_breakdown"
title: "WinAmountModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 WinAmountModule Execution Across Spin Phases

---

## 1. Spin Phase Cycle

| Phase | WinAmountModule State | Action |
| :--- | :--- | :--- |
| **Spin Start** | `fadeOutNumber()` or `clearWinAmount()` | Clears previous round score. |
| **Payline Presentation** | `updateWinAmount({ winAmount, time })` | Rolls up win numbers. |
| **Fast-Forward Touch** | `fastUpdateWinAmount({ winAmount, time: 0.1 })` | Accelerates counter to target. |
| **Settle** | `syncWinAmount()` | Reconnect recovery or steady-state display. |
