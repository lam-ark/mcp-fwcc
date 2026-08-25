---
id: "cc_slot_module:MenuPanel:game_flow:timing_execution_matrix"
title: "MenuPanel Timing Matrix"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 MenuPanel Timing Matrix

---

## 1. Timing Table

| Action | Method | Result |
| :--- | :--- | :--- |
| **Toggle BGM** | `toggleMusic()` | Emits `TOGGLE_BGM` |
| **Toggle SFX** | `toggleSFX()` | Emits `TOGGLE_SFX` |
| **Show Paytable** | `onShowPaytable()` | Emits `OPEN_PAY_TABLE_PANEL` |
| **Show Info** | `onShowInfo()` | Emits `OPEN_INFO_PANEL` |
| **Show History** | `onShowBetHistory()`| Emits `OPEN_BET_HISTORY_PANEL` |
