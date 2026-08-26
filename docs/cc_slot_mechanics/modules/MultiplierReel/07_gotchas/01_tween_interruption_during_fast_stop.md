---
id: "cc_slot_mechanics:MultiplierReel:gotchas:tween_interruption"
title: "MultiplierReel Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ MultiplierReel Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
