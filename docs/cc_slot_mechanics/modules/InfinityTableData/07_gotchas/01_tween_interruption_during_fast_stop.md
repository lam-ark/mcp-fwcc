---
id: "cc_slot_mechanics:InfinityTableData:gotchas:tween_interruption"
title: "InfinityTableData Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["InfinityTableData", "infinity_table_data", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ InfinityTableData Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
