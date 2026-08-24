---
id: "cc_slot_module:BetModule:game_flow:timing_execution_matrix"
title: "BetModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BetModule Timing Execution Matrix

---

## 1. Timing Configuration

| Action / Transition | Duration | Description |
| :--- | :--- | :--- |
| Wager Step Click | Instant ($0.0\text{s}$) | Immediate audio dispatch and `GameLogicUIEvents` emission. |
| Reactive Value Broadcast | Immediate | Dispatches `ON_UPDATE_VALUE` synchronously. |
| Button State Update | Immediate | Reflects `minBetEnable` / `maxBetEnable` immediately. |
