---
id: "cc_slot_module:BetHistoryDetailModule:game_flow:timing_execution_matrix"
title: "BetHistoryDetailModule Timing & Execution Matrix"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 BetHistoryDetailModule Timing Matrix

---

## 1. Timing Table

| User Action | Method Invoked | Animation / Transition |
| :--- | :--- | :--- |
| **Tab Click** | `onScrollClick(index)` | `scrollView.scrollToOffset(offsetX)` (Instant or 0.1s tween). |
| **Next Step Click** | `onNextClick()` | Tab highlight shifts + `gameModeView` rerenders. |
| **Back to List** | `onBackClick()` | Hides detailView and returns to recordView. |
