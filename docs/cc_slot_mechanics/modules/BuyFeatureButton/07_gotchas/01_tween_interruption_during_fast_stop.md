---
id: "cc_slot_mechanics:BuyFeatureButton:gotchas:tween_interruption"
title: "BuyFeatureButton Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ BuyFeatureButton Gotcha: Tween Cancellation during Fast Stop

---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
