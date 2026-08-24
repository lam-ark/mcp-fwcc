---
id: "cc_slot_module:SlotTableNearWinModule:inheritance:override_points_matrix"
title: "SlotTableNearWinModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotTableNearWinModule Override Points Matrix

---

## 1. Override Matrix

| Extension Method | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `extendInit()` | Empty virtual method | `YES` | None | Initializing custom particle emitters or light trails. |
| `_canWinFree(col)` | Contiguous left-to-right logic | `YES` | Optional | Custom Scatter trigger conditions (Anywhere/Payways). |
| `_canWinBonus(col)` | Contiguous left-to-right logic | `YES` | Optional | Custom Bonus game conditions. |
| `_canWinJP(col)` | Contiguous left-to-right logic | `YES` | Optional | Custom Jackpot line validation. |
| `_getXPosition(col)` | Standard column offset formula | `YES` | Optional | Non-uniform reel column spacing. |
| `resetNearWin()` | Stops Spine & audio | `YES` | `MANDATORY` | Cleaning up custom particles or screen shake tweens. |
