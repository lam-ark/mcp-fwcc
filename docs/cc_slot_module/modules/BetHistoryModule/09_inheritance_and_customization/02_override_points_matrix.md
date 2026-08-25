---
id: "cc_slot_module:BetHistoryModule:inheritance:override_points_matrix"
title: "BetHistoryModule Override Points Matrix"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 BetHistoryModule Override Points Matrix

---

## 1. Extension Hooks

| Extension Method | Safe to Override? | Required `super` Call | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend()` | `YES` | `MANDATORY` | Initialize custom child views and custom pagination sizing. |
| `setupObserver()` | `YES` | `MANDATORY` | Watch additional game-specific custom history fields. |
| `onRecordDataChange()` | `YES` | `MANDATORY` | Format custom currency formats or promotional free spin tags. |
| `onDestroy()` | `YES` | `MANDATORY` | Release custom model observers. |
