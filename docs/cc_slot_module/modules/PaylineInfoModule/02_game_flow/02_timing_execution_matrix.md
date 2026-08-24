---
id: "cc_slot_module:PaylineInfoModule:game_flow:timing_execution_matrix"
title: "PaylineInfoModule Timing Matrix"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineInfoModule Timing Matrix

---

## 1. Timing Configuration

| Event | Execution Timing |
| :--- | :--- |
| `showPaylineInfo` | Synchronized with `PaylineLineModule` step duration ($1.0\text{s} - 2.0\text{s}$). |
| `hidePaylineInfo` | Instant on step transition. |
