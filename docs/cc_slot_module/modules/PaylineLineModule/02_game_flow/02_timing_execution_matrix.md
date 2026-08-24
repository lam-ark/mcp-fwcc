---
id: "cc_slot_module:PaylineLineModule:game_flow:timing_execution_matrix"
title: "PaylineLineModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineLineModule Timing Execution Matrix

---

## 1. Execution Matrix

| Operation | Trigger Event | Execution Mode | Duration / Budget | Invoker |
| :--- | :--- | :--- | :--- | :--- |
| **`setupPaylines`** | `PAYLINE_SET_DATA` | Synchronous | $< 1\text{ms}$ | `SlotTablePaylineModule` |
| **`blinkAllPayLines`**| `PAYLINE_BLINK_ALL` | Synchronous | $\sim 2-5\text{ms}$ (Instantiation/Pool lookup) | `SlotPaylineSchedule` |
| **`showPayLine`** | `PAYLINE_SHOW_LINE` | Synchronous | $< 1\text{ms}$ | `SlotPaylineSchedule` |
| **`hideAll`** | `PAYLINE_STOP_ALL` | Synchronous | $< 1\text{ms}$ | `SlotPaylineSchedule` |
| **`clearAll`** | `PAYLINE_CLEAR` | Synchronous | $< 1\text{ms}$ | `SlotPaylineSchedule` / Mode Director |
