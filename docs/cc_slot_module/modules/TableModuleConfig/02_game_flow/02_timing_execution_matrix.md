---
id: "cc_slot_module:TableModuleConfig:game_flow:timing_execution_matrix"
title: "TableModuleConfig Speed Modes Tuning Matrix"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "game_flow", "timing_matrix", "speed_modes"]
---

# ⏱️ TableModuleConfig Speed Modes Tuning Matrix

## 1. Mode Calibration Parameters

| Mode Property | `MODES.NORMAL` | `MODES.TURBO` | Unit & Explanation |
| :--- | :--- | :--- | :--- |
| **`speed`** | `0.06` | `0.05` | Scroll interval in seconds per symbol step. |
| **`easingStop`** | `15` | `10` | Deceleration bounce displacement in pixels. |
| **`easingTimeStop`** | `0.2` | `0.15` | Duration in seconds of the final settling bounce. |
| **`delayStop`** | `0.5` | `0` | Delay between consecutive column stops. |
| **`stepStop`** | `12` | `6` | Total symbol steps scrolled during deceleration. |
| **`slowdownFactor`**| `4` | `8` | Exponential decay rate applied to spin velocity. |
| **`isTurbo`** | `false` | `true` | Boolean flag indicating Turbo status. |
