---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:gotchas:tween_interruption"
title: "CascadeWildGenerationSceneTest Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CascadeWildGenerationSceneTest Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
