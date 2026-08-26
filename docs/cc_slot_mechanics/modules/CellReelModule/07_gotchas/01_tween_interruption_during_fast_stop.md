---
id: "cc_slot_mechanics:CellReelModule:gotchas:tween_interruption"
title: "CellReelModule Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CellReelModule Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
