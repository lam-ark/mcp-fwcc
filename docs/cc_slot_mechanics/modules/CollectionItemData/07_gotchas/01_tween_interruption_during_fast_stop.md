---
id: "cc_slot_mechanics:CollectionItemData:gotchas:tween_interruption"
title: "CollectionItemData Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ CollectionItemData Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
