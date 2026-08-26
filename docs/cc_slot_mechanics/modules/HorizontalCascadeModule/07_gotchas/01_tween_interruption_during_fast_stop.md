---
id: "cc_slot_mechanics:HorizontalCascadeModule:gotchas:tween_interruption"
title: "HorizontalCascadeModule Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ HorizontalCascadeModule Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
