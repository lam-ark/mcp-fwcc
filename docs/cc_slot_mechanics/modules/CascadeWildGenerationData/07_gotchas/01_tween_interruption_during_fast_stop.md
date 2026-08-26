---
id: "cc_slot_mechanics:CascadeWildGenerationData:gotchas:tween_interruption"
title: "CascadeWildGenerationData Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CascadeWildGenerationData Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
