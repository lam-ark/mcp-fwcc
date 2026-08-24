---
id: "cc_slot_module:ToastInfoModule:methods:onDestroy"
title: "ToastInfoModule.onDestroy Method"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `ToastInfoModule.onDestroy()`

---

## 1. Method Overview & Signature

Stops running toast tween animations upon node destruction.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this._tweenToast && this._tweenToast.stop();
    this._tweenToast = null;
}
```
