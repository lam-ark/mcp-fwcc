---
id: "cc_slot_mechanics:CollectionItemModule:gotchas:tween_interruption"
title: "CollectionItemModule Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CollectionItemModule Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
