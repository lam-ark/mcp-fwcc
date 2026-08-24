---
id: "cc_slot_module:PaylineWinFrameModule:game_flow:timing_execution_matrix"
title: "PaylineWinFrameModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineWinFrameModule Timing Execution Matrix

---

## 1. Execution Cost Matrix

| Method | Invocation | Complexity | Cost |
| :--- | :--- | :--- | :--- |
| **`playAnimation`** | `SYMBOL_PLAY_ANIMATION_WIN` | $O(1)$ | Pool fetch / instantiation (< 0.1ms). |
| **`hideAll`** | `PAYLINE_STOP_ALL` | $O(F)$ ($F = \text{frames}$) | Emits HIDE to active frames (< 0.05ms). |
| **`clearAll`** | `PAYLINE_CLEAR` | $O(F)$ | Returns nodes to pool (< 0.1ms). |
