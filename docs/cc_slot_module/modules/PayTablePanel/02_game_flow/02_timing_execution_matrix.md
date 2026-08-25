---
id: "cc_slot_module:PayTablePanel:game_flow:timing_execution_matrix"
title: "PayTablePanel Timing Matrix"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 PayTablePanel Timing Matrix

---

## 1. Timing Table

| Action | Method | Result |
| :--- | :--- | :--- |
| **Open** | `showPayTablePanel(true)` | Scrolls to top and fades in. |
| **Close** | `onClosePanel()` | Emits `CLOSE_PAY_TABLE_PANEL`. |
