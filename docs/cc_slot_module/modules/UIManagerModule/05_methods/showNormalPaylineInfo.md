---
id: "cc_slot_module:UIManagerModule:methods:showNormalPaylineInfo"
title: "UIManagerModule.showNormalPaylineInfo Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showNormalPaylineInfo"]
---

# 📖 `UIManagerModule.showNormalPaylineInfo()`

---

## 1. Method Overview & Signature

Sets normal game payline info opacity to 255 and free game payline info opacity to 0.

```typescript
public showNormalPaylineInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showNormalPaylineInfo(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 255);
    this.setNodeOpacity(this.paylineInfoFreeGame, 0);
}
```
