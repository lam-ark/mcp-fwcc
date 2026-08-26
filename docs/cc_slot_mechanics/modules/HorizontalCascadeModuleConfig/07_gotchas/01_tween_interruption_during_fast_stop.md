---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:gotchas:tween_interruption"
title: "HorizontalCascadeModuleConfig Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ HorizontalCascadeModuleConfig Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
