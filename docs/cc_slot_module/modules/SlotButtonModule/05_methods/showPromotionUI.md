---
id: "cc_slot_module:SlotButtonModule:methods:showPromotionUI"
title: "SlotButtonNormal.showPromotionUI Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "showPromotionUI", "promotion"]
---

# 📖 `SlotButtonNormal.showPromotionUI()`

---

## 1. Method Overview & Signature

Hides standard "HOLD TO AUTO" spin text and sets `hasPromotion` flag when a promotional campaign is active.

```typescript
public showPromotionUI(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showPromotionUI(isActive: boolean): void {
    if (this.textSpin) {
        this.textSpin.node.active = !isActive;
    }
    this.hasPromotion = isActive;
}
```
