---
id: "cc_slot_module:PaylineNumberModule:game_flow:timing_execution_matrix"
title: "PaylineNumberModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineNumberModule Timing Execution Matrix

---

## 1. Timing Matrix

| Operation | Trigger | Mode | Budget | Impact |
| :--- | :--- | :--- | :--- | :--- |
| **`onLoadExtend`** | Scene Load | Synchronous | $< 2\text{ms}$ | Caches item list and maps keys. |
| **`setupPaylines`**| `PAYLINE_SET_DATA` | Synchronous | $< 1\text{ms}$ | Updates `payLines` reference. |
| **`blinkAllPayLines`**| `PAYLINE_BLINK_ALL` | Synchronous | $< 1\text{ms}$ | Iterates and calls `showNumber()`. |
| **`showPayLine`** | `PAYLINE_SHOW_LINE` | Synchronous | $< 1\text{ms}$ | Calls `hideAll()` and `showNumber()`. |
| **`hideAll`** | `PAYLINE_STOP_ALL` / `CLEAR` | Synchronous | $< 1\text{ms}$ | Iterates items and calls `hide()`. |
