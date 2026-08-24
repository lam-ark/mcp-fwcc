---
id: "cc_slot_module:SlotSymbolManager:game_flow:timing_execution_matrix"
title: "SlotSymbolManager Allocation & Sorting Timings"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotSymbolManager Allocation & Sorting Timings

## 1. Execution Cost Matrix

| Operation | Execution Timing | Complexity | Impact on Frame Rate |
| :--- | :--- | :--- | :--- |
| **`initSymbolPool`** | `onLoadExtend` (Bootstrap) | $O(N)$ where $N = 15$ | Pre-allocated (0 dropped frames during gameplay). |
| **`getSymbolFromPool`** | Spin Start / Reel Stop | $O(1)$ stack pop | Instantaneous (< 0.1ms). |
| **`removeSymbol`** | Reel Stop / Mode Exit | $O(M)$ where $M = \text{usingSymbols}$ | Splices array and puts node into pool (< 0.2ms). |
| **`updateSymbolSiblingIndex`**| Payline Blinking Trigger | $O(K \log K)$ ($K \le 15$) | Re-orders visual z-indices across layers (< 0.3ms). |
