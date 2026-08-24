---
id: "cc_slot_module:PaylineFactory:game_flow:timing_execution_matrix"
title: "PaylineFactory Timing Execution Matrix"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineFactory Timing Execution Matrix

---

## 1. Timing Matrix

| Method | Execution Mode | Budget | Impact |
| :--- | :--- | :--- | :--- |
| **`onLoad`** | Synchronous | $\sim 5-15\text{ms}$ (Preloading objects) | Executed once during scene loading. |
| **`getObject` (Pool Hit)** | Synchronous | $< 0.05\text{ms}$ | High speed retrieval from memory. |
| **`getObject` (Pool Miss)**| Synchronous | $\sim 0.5-1.0\text{ms}$ | Fallback instantiation. |
| **`returnObject`** | Synchronous | $< 0.05\text{ms}$ | Cleans parent and stores node in pool. |
