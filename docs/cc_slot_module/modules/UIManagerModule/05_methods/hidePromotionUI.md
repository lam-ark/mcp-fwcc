---
id: "cc_slot_module:UIManagerModule:methods:hidePromotionUI"
title: "UIManagerModule.hidePromotionUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "hidePromotionUI"]
---

# 📖 `UIManagerModule.hidePromotionUI()`

---

## 1. Method Overview & Signature

Deactivates all promotional campaign overlay nodes in the `promotionUI` array.

```typescript
public hidePromotionUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hidePromotionUI(): void {
    this.promotionUI.forEach((node) => {
        node.active = false;
    });
}
```
