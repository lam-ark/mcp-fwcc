---
id: "cc_slot_mechanics:RemovedSymbolModule:gotchas:tween_interruption"
title: "RemovedSymbolModule Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ RemovedSymbolModule Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
