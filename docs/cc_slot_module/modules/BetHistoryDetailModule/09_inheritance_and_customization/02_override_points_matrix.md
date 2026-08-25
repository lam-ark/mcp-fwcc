---
id: "cc_slot_module:BetHistoryDetailModule:inheritance:override_points_matrix"
title: "BetHistoryDetailModule Override Points Matrix"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 BetHistoryDetailModule Override Points Matrix

---

## 1. Override Points Table

| Extension Method | Safe to Override? | Required `super` Call | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend()` | `YES` | `MANDATORY` | Initialize custom pool sizes or additional child view nodes. |
| `updateGameModeInfo()`| `YES` | `MANDATORY` | Customize currency text and feature multipliers. |
| `onRenderDataView()` | `YES` | `MANDATORY` | Support custom mini-game replay panels. |
| `onDestroy()` | `YES` | `MANDATORY` | Release observer listeners and drain NodePool. |
