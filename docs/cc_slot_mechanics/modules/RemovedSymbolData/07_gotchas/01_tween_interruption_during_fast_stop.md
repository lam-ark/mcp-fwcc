---
id: "cc_slot_mechanics:RemovedSymbolData:gotchas:tween_interruption"
title: "RemovedSymbolData Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ RemovedSymbolData Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
