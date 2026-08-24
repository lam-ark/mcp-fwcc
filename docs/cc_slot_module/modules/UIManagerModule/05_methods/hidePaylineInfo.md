---
id: "cc_slot_module:UIManagerModule:methods:hidePaylineInfo"
title: "UIManagerModule.hidePaylineInfo Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "hidePaylineInfo"]
---

# 📖 `UIManagerModule.hidePaylineInfo()`

---

## 1. Method Overview & Signature

Fades opacity to 0 on both normal and free game payline info notification banners.

```typescript
public hidePaylineInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hidePaylineInfo(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 0);
    this.setNodeOpacity(this.paylineInfoFreeGame, 0);
}
```
