---
id: "cc_slot_mechanics:CellTableData:gotchas:tween_interruption"
title: "CellTableData Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CellTableData Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
