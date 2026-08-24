---
id: "cc_slot_module:IconPromotion:gotchas:promotional_state_observer_leak"
title: "Gotcha: Unreleased Observer on PromotionData"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "gotchas", "observer_leak"]
---

# ⚠️ Gotcha: Unreleased Observer on PromotionData

---

## 1. Problem Description

`IconPromotion` watches `this.promotionDataModel`. If `onDestroy` omits `this.observer.releaseAll(this.promotionDataModel, this)`, stale observer handlers fire on subsequent game re-entry.

---

## 2. Prevention

Always clean up in `onDestroy()`:
```typescript
onDestroy(): void {
    this.observer.releaseAll(this.promotionDataModel, this);
}
```
