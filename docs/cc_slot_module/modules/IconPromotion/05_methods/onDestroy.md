---
id: "cc_slot_module:IconPromotion:methods:onDestroy"
title: "IconPromotion.onDestroy Method"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `IconPromotion.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observers registered against `promotionDataModel`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.promotionDataModel, this);
}
```
