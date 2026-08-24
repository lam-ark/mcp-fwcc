---
id: "cc_slot_module:SlotButtonModule:game_flow:timing_execution_matrix"
title: "SlotButtonModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotButtonModule Timing Execution Matrix

---

## 1. Timing Configuration

| Action / Gesture | Duration | Description |
| :--- | :--- | :--- |
| `holdTime` | $0.7\text{s}$ | Long-press duration to trigger Auto Spin. |
| Keyboard Repeat Throttle | Event-driven | Key repeat suppressed until key released (`KEY_UP`). |
| Hover Debounce | $0.0\text{s}$ | Immediate cursor entry/exit dispatch. |
