---
id: "cc_slot_mechanics:TableModuleConfigTest:gotchas:tween_interruption"
title: "TableModuleConfigTest Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["TableModuleConfigTest", "table_module_config_test", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ TableModuleConfigTest Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
