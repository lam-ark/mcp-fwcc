---
id: "cc_slot_module:JackpotHistoryModule:game_flow:timing_execution_matrix"
title: "JackpotHistoryModule Timing Matrix"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 JackpotHistoryModule Timing Matrix

---

## 1. Timing Table

| Action | Invoker | Method | State Mutation |
| :--- | :--- | :--- | :--- |
| **Open Panel** | User Click | `onShowJackpotHistory(true)` | `currentIsActive = true` |
| **Data Ingestion**| Logic Callback | `onShowRecordView(data)` | `recordView` populated |
| **Next Page** | User Click | `onNextPage()` | Emits `REQUEST_JACKPOT_NEXT_PAGE` |
| **Close** | User Click | `onClose()` | `currentIsActive = false` |
