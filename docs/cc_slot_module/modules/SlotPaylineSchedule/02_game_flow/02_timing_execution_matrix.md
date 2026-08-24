---
id: "cc_slot_module:SlotPaylineSchedule:game_flow:timing_execution_matrix"
title: "SlotPaylineSchedule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotPaylineSchedule Timing Execution Matrix

---

## 1. Timing Matrix

| Method | Execution Mode | Duration / Budget | Async Return |
| :--- | :--- | :--- | :--- |
| **`blinkAllPaylines`** | Asynchronous | `config.TIMELINE_CONFIG` ($\approx 1.5 - 2.0\text{s}$) | Returns `Promise<void>` resolved after delay. |
| **`showAllPaylines`** | Looping Tween | Runs indefinitely ($\Delta t = \text{timelineConfig}$ per line) | Synchronous invocation; background tween loop. |
| **`onShowScatter`** | Asynchronous | `config.TIMELINE_CONFIG` | Returns `Promise<void>`. |
| **`onShowBonus`** | Asynchronous | `config.TIMELINE_CONFIG` | Returns `Promise<void>`. |
| **`onShowJackpot`** | Asynchronous | `config.TIMELINE_CONFIG` | Returns `Promise<void>`. |
| **`stopSchedule`** | Synchronous | $< 1\text{ms}$ | Immediate cancellation. |
