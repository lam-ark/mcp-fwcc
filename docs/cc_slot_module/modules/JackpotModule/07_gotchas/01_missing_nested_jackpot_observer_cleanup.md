---
id: "cc_slot_module:JackpotModule:gotchas:missing_nested_jackpot_observer_cleanup"
title: "Gotcha: Memory Leak from Nested Index Observers"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "gotchas", "nested_observer"]
---

# ⚠️ Gotcha: Memory Leak from Nested Index Observers

---

## 1. Problem Description

When the player changes bet denomination, `setupObserver` creates a new watch on `jackpots.${index}`. If `this.observerJPIndex && this.observerJPIndex()` is not called before creating the new observer handle, old observers accumulate, resulting in multiple competing count-up animations on the same label.

---

## 2. Prevention

Always cancel the previous nested observer handle:
```typescript
this.observerJPIndex && this.observerJPIndex();
this.observerJPIndex = this.observer.watch(this.jackpotData, `jackpots.${index}`, ...);
```
