---
id: "cc_slot_module:FortuneWheelGameDirector:customization:override_points_matrix"
title: "FortuneWheelGameDirector Extension Points Matrix"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 FortuneWheelGameDirector Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onSpinWheel()`** | Dispatches request & starts spin | `EXTEND_ONLY` | `MANDATORY` | Trigger pointer bounce sound or button recoil. |
| **`_showWheelResult(val)`**| Emits `STOP_SPIN_WHEEL` | `YES` | None | Trigger target wedge celebratory glow. |
| **`_fastStopWheel()`** | Emits `FAST_STOP_WHEEL` | `YES` | None | Instantaneous wheel snap deceleration. |
| **`resetBonusGame()`** | Resets and emits `RESET_WHEEL` | `EXTEND_ONLY` | `MANDATORY` | Re-align wheel pointer to 0 degrees. |
