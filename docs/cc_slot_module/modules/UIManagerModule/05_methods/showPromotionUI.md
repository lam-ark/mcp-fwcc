---
id: "cc_slot_module:UIManagerModule:methods:showPromotionUI"
title: "UIManagerModule.showPromotionUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showPromotionUI", "promotion"]
---

# 📖 `UIManagerModule.showPromotionUI()`

---

## 1. Method Overview & Signature

Synchronizes the visibility of all `promotionUI` overlay nodes with `promotionDataModel.isActive`.

```typescript
public showPromotionUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showPromotionUI(): void {
    const isActive = this.promotionDataModel.isActive;
    this.promotionUI.forEach((node) => {
        node.active = isActive;
    });
}
```
