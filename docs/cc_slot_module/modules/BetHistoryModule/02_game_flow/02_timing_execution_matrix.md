---
id: "cc_slot_module:BetHistoryModule:game_flow:timing_execution_matrix"
title: "BetHistoryModule Timing & Execution Matrix"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "game_flow", "timing_matrix"]
---

# 📊 BetHistoryModule Timing & Execution Matrix

---

## 1. Execution Matrix

| Action / Event | Invoking Entity | Method Called | State Mutation | Failure Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Open History** | User Click / UI Button | `showBetHistory(true)` | `currentIsActive = true` | Modal does not show. |
| **Data Received** | HTTP/WebSocket Callback | `onRecordDataChange(data)` | `recordView` updated | Empty list displayed. |
| **Next Page** | User Next Click | `onNextPage()` | `isEnableNext = false` during load | Page gets stuck on current index. |
| **Prev Page** | User Prev Click | `onPrevPage()` | `isEnablePrev = false` during load | Cannot navigate backwards. |
| **Close Modal** | User Close Click | `onClose()` | `currentIsActive = false` | Modal stays stuck on screen. |
