---
id: "cc_slot_mechanics:StickySymbolConfig:gotchas:tween_interruption"
title: "StickySymbolConfig Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["StickySymbolConfig", "sticky_symbol_config", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ StickySymbolConfig Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
