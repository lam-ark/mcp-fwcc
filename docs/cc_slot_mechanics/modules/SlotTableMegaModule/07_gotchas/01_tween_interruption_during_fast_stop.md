---
id: "cc_slot_mechanics:SlotTableMegaModule:gotchas:tween_interruption"
title: "SlotTableMegaModule Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ SlotTableMegaModule Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
