---
id: "cc_slot_module:SlotTablePaylineModule:inheritance:override_points_matrix"
title: "SlotTablePaylineModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotTablePaylineModule Override Points Matrix

---

## 1. Override Points Matrix

| Method | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `initExtend()` | Empty virtual hook | `YES` | None | Initializing custom particle layers or custom line drawers. |
| `registerEvents()` | Binds `SETUP_PAYLINES` | `YES` | `MANDATORY` | Subscribing to custom game mode events. |
| `onSetupPaylines()` | Dispatches `PAYLINE_SET_DATA` | `YES` | `RECOMMENDED` | Injecting custom multipliers or feature metadata. |
| `onDestroy()` | Calls `unregisterEvents` | `YES` | `MANDATORY` | Cleaning up custom observers. |
