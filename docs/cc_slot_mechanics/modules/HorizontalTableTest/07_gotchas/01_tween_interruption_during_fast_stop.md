---
id: "cc_slot_mechanics:HorizontalTableTest:gotchas:tween_interruption"
title: "HorizontalTableTest Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ HorizontalTableTest Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
