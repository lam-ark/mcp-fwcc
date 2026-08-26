---
id: "cc_slot_mechanics:TableGigabloxData:gotchas:tween_interruption"
title: "TableGigabloxData Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ TableGigabloxData Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
