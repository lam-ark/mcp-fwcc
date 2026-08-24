---
id: "cc_slot_module:SlotPaylineSchedule:inheritance:override_points_matrix"
title: "SlotPaylineSchedule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotPaylineSchedule Override Points & Extension Matrix

---

## 1. Override Points Matrix

| Method | Super Required | Return Type | Extension Purpose |
| :--- | :--- | :--- | :--- |
| `blinkAllPaylines` | No | `Promise<void>` | Customize Stage 1 concurrent delay. |
| `showAllPaylines` | No | `void` | Customize Stage 2 loop sequencing. |
| `onShowScatter` | No | `Promise<void>` | Custom Scatter anticipation timing. |
| `onShowBonus` | No | `Promise<void>` | Custom Bonus round trigger timing. |
| `showPayline` | Recommended | `void` | Custom line notification dispatching. |
