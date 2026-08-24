---
id: "cc_slot_module:CascadeModuleData:game_flow:timing_execution_matrix"
title: "CascadeModuleData Timing Execution Matrix"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ CascadeModuleData Timing Execution Matrix

---

## 1. Timing Matrix

| Method | Invocation Nature | Execution Budget | Cost |
| :--- | :--- | :--- | :--- |
| **`onloadExtend`** | Scene Load | $< 0.5\text{ms}$ | Caches `CascadeModuleConfig` component. |
| **`getMatrix`** | Synchronous | $< 0.1\text{ms}$ | 2D matrix conversion. |
| **`getTraceWay`**| Synchronous | $< 0.05\text{ms}$ | Array sort copy. |
| **`formatData`** | Synchronous | $< 0.2\text{ms}$ | Iterates grid cells and flags `-1`. |
