---
id: "cc_slot_module:IconPromotion:methods:onLoadExtend"
title: "IconPromotion.onLoadExtend Method"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `IconPromotion.onLoadExtend()`

---

## 1. Method Overview & Signature

Acquires `PromotionData` model, sets node inactive initially, and binds observers.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
    this.node.active = false;
    this.setupObserver();
}
```
