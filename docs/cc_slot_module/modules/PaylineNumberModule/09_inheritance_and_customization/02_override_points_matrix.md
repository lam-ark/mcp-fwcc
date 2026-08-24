---
id: "cc_slot_module:PaylineNumberModule:inheritance:override_points_matrix"
title: "PaylineNumberModule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineNumberModule Override Points & Extension Matrix

---

## 1. Override Points Matrix

| Method | Super Required | Safe to Replace | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend` | Recommended | YES | Customize hierarchy scanning logic. |
| `showNumber` | No | YES | Add custom badge animations or shader effects. |
| `hideNumber` | No | YES | Add custom fade-out animations. |
| `blinkAllPayLines` | Optional | YES | Implement custom sequential or wave-like number flashes. |
