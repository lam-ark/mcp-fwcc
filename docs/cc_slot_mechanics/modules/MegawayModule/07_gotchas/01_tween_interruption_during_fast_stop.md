---
id: "cc_slot_mechanics:MegawayModule:gotchas:tween_interruption"
title: "MegawayModule Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ MegawayModule Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
