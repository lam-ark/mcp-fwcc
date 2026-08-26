---
id: "cc_slot_mechanics:HorizontalTableData:gotchas:tween_interruption"
title: "HorizontalTableData Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ HorizontalTableData Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
