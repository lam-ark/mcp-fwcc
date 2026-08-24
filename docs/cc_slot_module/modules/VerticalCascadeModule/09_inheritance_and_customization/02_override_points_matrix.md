---
id: "cc_slot_module:VerticalCascadeModule:inheritance:override_points_matrix"
title: "VerticalCascadeModule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 VerticalCascadeModule Override Points & Extension Matrix

---

## 1. Override Matrix

| Method | Super Call Required | Purpose |
| :--- | :--- | :--- |
| `playFalling` | Optional | Custom drop animation curve or easing. |
| `removeSymbolAt` | Optional | Custom particle explosion before pool recycling. |
| `stopRespinWithNearwin` | Optional | Custom near-win column suspension. |
| `resetAllEffectAndTasks` | Mandatory (`super.resetAllEffectAndTasks()`) | Cleanup custom particle nodes and timers. |
