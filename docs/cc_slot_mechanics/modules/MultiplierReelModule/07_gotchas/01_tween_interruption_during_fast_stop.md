---
id: "cc_slot_mechanics:MultiplierReelModule:gotchas:tween_interruption"
title: "MultiplierReelModule Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ MultiplierReelModule Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
