---
id: "cc_slot_module:IconPromotion:methods:showPromotion"
title: "IconPromotion.showPromotion Method"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "methods", "showPromotion"]
---

# 📖 `IconPromotion.showPromotion()`

---

## 1. Method Overview & Signature

Toggles visibility of the promotion container node.

```typescript
public showPromotion(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showPromotion(isActive: boolean): void {
    this.node.active = isActive;
}
```
