---
id: "cc_slot_module:SlotTablePaylineModule:game_flow:timing_execution_matrix"
title: "SlotTablePaylineModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotTablePaylineModule Timing Execution Matrix

---

## 1. Execution Cost & Performance Matrix

| Action / Method | Invocation Moment | Complexity | Frame Time Impact |
| :--- | :--- | :--- | :--- |
| **`init()`** | `onLoadExtend` (Bootstrap) | $O(C)$ ($C = \text{paylineComponents}$) | One-time child discovery & listener binding (< 0.5ms). |
| **`onSetupPaylines()`** | Spin Stop Result (`SETUP_PAYLINES`) | $O(L \times M)$ ($L = \text{lines}$, $M = \text{matrix}$) | Normalizes payline matrices & calculates hit symbols (< 1ms). |
| **`onTableFormatChanged()`** | Expanding Grid Feature | $O(1)$ | Mutates `format` array in `PaylineConfig`. |
| **`onDestroy()`** | Node Teardown | $O(1)$ | Unregisters `moduleEvent` listeners. |
