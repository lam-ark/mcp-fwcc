---
id: "cc_slot_mechanics:RemovedSymbolConfig:gotchas:tween_interruption"
title: "RemovedSymbolConfig Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolConfig", "removed_symbol_config", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ RemovedSymbolConfig Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
