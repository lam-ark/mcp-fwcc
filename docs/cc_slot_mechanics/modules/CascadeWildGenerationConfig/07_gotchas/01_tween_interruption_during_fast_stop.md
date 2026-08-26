---
id: "cc_slot_mechanics:CascadeWildGenerationConfig:gotchas:tween_interruption"
title: "CascadeWildGenerationConfig Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationConfig", "cascade_wild_generation_config", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CascadeWildGenerationConfig Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
