---
id: "cc_slot_module:SlotTableNearWinModule:game_flow:timing_execution_matrix"
title: "SlotTableNearWinModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotTableNearWinModule Timing Execution Matrix

---

## 1. Execution Cost Matrix

| Method | Invoking Entity / Event | Timing | Complexity | Impact |
| :--- | :--- | :--- | :--- | :--- |
| **`onLoadExtend()`** | Engine Bootstrap | Component Load | $O(1)$ | Fetches `TableModuleConfig`, caches animation component. |
| **`setupNearWin()`** | `SlotTableModule` (`SETUP_NEARWIN`) | Spin Result Arrival | $O(C \times R)$ ($5 \times 3 = 15$) | Iterates matrix grid; negligible CPU footprint (< 0.05ms). |
| **`reelStopNearWin()`** | `SlotTableModule` (`REEL_STOP_NEARWIN`) | Each Reel Landing | $O(1)$ | Reads `_nearWinData[col]`, repositions VFX, plays audio. |
| **`resetNearWin()`** | `SlotTableModule` (`RESET_NEARWIN`) | Spin Completion / FTR | $O(1)$ | Clears counters, halts audio and Spine animation. |
| **`_getXPosition()`** | Internal Helper | Anticipation Play | $O(1)$ | Computes standard offset $X = \text{startX} + \text{col} \times \text{width}$. |
