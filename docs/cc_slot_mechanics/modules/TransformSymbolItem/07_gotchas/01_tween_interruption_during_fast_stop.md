---
id: "cc_slot_mechanics:TransformSymbolItem:gotchas:tween_interruption"
title: "TransformSymbolItem Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["TransformSymbolItem", "transform_symbol_item", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ TransformSymbolItem Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
