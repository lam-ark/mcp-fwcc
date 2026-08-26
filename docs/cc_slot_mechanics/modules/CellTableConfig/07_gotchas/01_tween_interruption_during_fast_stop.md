---
id: "cc_slot_mechanics:CellTableConfig:gotchas:tween_interruption"
title: "CellTableConfig Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CellTableConfig", "cell_table_config", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CellTableConfig Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
