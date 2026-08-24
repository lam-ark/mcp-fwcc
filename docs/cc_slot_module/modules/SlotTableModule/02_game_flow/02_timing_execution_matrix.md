---
id: "cc_slot_module:SlotTableModule:game_flow:timing_execution_matrix"
title: "SlotTableModule Spin Timings Execution Matrix"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotTableModule Spin Timings Execution Matrix

## 1. Timing Execution Matrix

| Spin Mode | Reel Start Offset | Column Stop Interval | Easing Bounce Duration | Total Table Spin Duration |
| :--- | :--- | :--- | :--- | :--- |
| **Normal Spin** | `0ms` (Simultaneous) | `200ms` per column | `300ms` (Back.easeOut) | ~1.8s - 2.5s |
| **Turbo Spin** | `0ms` | `50ms` per column | `100ms` (Linear / Snap) | ~0.6s - 0.8s |
| **Fast-Stop (Tap)**| Immediate | `0ms` (Instant Snap) | `50ms` | < 0.2s |
| **Near-Win Spin** | `0ms` | Configured by NearWin | `500ms` | +1.5s delay on anticipated column |
