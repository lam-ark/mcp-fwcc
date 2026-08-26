---
id: "cc_slot_mechanics:InfinityTableConfig:gotchas:tween_interruption"
title: "InfinityTableConfig Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["InfinityTableConfig", "infinity_table_config", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ InfinityTableConfig Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
