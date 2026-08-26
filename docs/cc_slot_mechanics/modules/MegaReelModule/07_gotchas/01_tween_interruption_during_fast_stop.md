---
id: "cc_slot_mechanics:MegaReelModule:gotchas:tween_interruption"
title: "MegaReelModule Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ MegaReelModule Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
