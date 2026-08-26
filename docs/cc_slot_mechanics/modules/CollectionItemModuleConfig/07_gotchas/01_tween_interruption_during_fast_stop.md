---
id: "cc_slot_mechanics:CollectionItemModuleConfig:gotchas:tween_interruption"
title: "CollectionItemModuleConfig Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CollectionItemModuleConfig", "collection_item_module_config", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CollectionItemModuleConfig Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
