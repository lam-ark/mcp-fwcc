---
id: "cc_slot_module:InfoPanel:game_flow:timing_execution_matrix"
title: "InfoPanel Timing Matrix"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 InfoPanel Timing Matrix

---

## 1. Timing Table

| Action | Invoker | Method | Animation |
| :--- | :--- | :--- | :--- |
| **Next Page** | User Click | `next()` | `pageView.scrollToPage(id + 1, 0)` |
| **Prev Page** | User Click | `previous()`| `pageView.scrollToPage(id - 1, 0)` |
| **Page Swipe**| Touch Drag | `pageViewEvent()`| PageView page-turning event. |
