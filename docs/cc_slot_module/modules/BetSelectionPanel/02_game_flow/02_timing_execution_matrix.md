---
id: "cc_slot_module:BetSelectionPanel:game_flow:timing_execution_matrix"
title: "BetSelectionPanel Timing Matrix"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 BetSelectionPanel Timing Matrix

---

## 1. Timing Table

| Action | Method | Duration |
| :--- | :--- | :--- |
| **Scroll Sync** | `onScrollToBetId()` | `scrollTime (0.15s)` tween. |
| **Max Bet Jump**| `onSelectMaxBet()` | `scrollTime (0.15s)` scroll to last index. |
| **Confirm** | `onConfirmBet()` | Emits `UPDATE_BET_ID` and closes immediately. |
