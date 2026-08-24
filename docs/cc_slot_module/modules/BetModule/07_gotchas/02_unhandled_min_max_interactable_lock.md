---
id: "cc_slot_module:BetModule:gotchas:unhandled_min_max_interactable_lock"
title: "Gotcha: Button Lockout Without canTriggerSameValue"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "gotchas", "observer_flags"]
---

# ⚠️ Gotcha: Button Lockout Without `canTriggerSameValue`

---

## 1. Problem Description

When watching `minBetEnable` or `maxBetEnable`, the reactive observer must be configured with `{ canTriggerSameValue: true }`. If omitted, when a player exhausts their funds and then refills balance back to the same bet index, the observer will consider the boolean value unchanged and skip re-enabling the stepper button.

---

## 2. Prevention

Always pass `{ canTriggerSameValue: true }` in `setupObserver()`:
```typescript
this.observer.watch(this.betModel, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
this.observer.watch(this.betModel, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
```
