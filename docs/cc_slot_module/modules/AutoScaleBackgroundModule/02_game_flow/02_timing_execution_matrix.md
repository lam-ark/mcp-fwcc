---
id: "cc_slot_module:AutoScaleBackgroundModule:game_flow:timing_execution_matrix"
title: "AutoScaleBackgroundModule Timing Matrix"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ AutoScaleBackgroundModule Timing Matrix

| Trigger | Caller | Method |
| :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` ➔ `start()` ➔ `scaleCanvasByOrientation()` |
| **Resize** | Window / View | `onScreenResized()` ➔ `scaleCanvasByOrientation()` |
| **Teardown** | Engine | `onDestroy()` ➔ Removes event listener |
