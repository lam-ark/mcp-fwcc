---
id: "cc_slot_mechanics:TransformSymbolVFX:gotchas:tween_interruption"
title: "TransformSymbolVFX Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ TransformSymbolVFX Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
