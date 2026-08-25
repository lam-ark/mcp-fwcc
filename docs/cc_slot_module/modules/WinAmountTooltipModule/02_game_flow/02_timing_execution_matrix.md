---
id: "cc_slot_module:WinAmountTooltipModule:game_flow:timing_execution_matrix"
title: "WinAmountTooltipModule Timing Matrix"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 WinAmountTooltipModule Timing Matrix

---

## 1. Timing Table

| Step | Duration | Transition |
| :--- | :--- | :--- |
| **Fade In** | `fadeTime (0.5s)` | `eno.fadeIn(tip, 0.5)` |
| **Pause** | `delayTime (1.5s)`| Holds tip visible at center. |
| **Slide Out**| `movingTime (5.0s)`| Tweens position to `(-width, 0)`. |
