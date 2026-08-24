---
id: "cc_slot_module:IconPromotion:methods:setupObserver"
title: "IconPromotion.setupObserver Method"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `IconPromotion.setupObserver()`

---

## 1. Method Overview & Signature

Watches `isActive` on `PromotionData`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.promotionDataModel, "isActive", this.showPromotion.bind(this), this, { fireImmediately: true });
}
```
