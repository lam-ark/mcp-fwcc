---
id: "cc_slot_mechanics:InfinityTableTest:gotchas:tween_interruption"
title: "InfinityTableTest Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ InfinityTableTest Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
