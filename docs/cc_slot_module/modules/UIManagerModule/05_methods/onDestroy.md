---
id: "cc_slot_module:UIManagerModule:methods:onDestroy"
title: "UIManagerModule.onDestroy Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `UIManagerModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observer subscriptions on `uiManagerData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.uiManagerData, this);
}
```
