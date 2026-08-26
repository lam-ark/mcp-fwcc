---
id: "cc_slot_mechanics:SlotCellSceneTest:gotchas:tween_interruption"
title: "SlotCellSceneTest Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ SlotCellSceneTest Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
