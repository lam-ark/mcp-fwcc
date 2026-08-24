---
id: "cc_slot_module:UIManagerModule:methods:showPaylineInfoFree"
title: "UIManagerModule.showPaylineInfoFree Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showPaylineInfoFree"]
---

# 📖 `UIManagerModule.showPaylineInfoFree()`

---

## 1. Method Overview & Signature

Sets free game payline info opacity to 255 and normal game payline info opacity to 0.

```typescript
public showPaylineInfoFree(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showPaylineInfoFree(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 0);
    this.setNodeOpacity(this.paylineInfoFreeGame, 255);
}
```
