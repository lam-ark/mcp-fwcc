---
id: "cc_slot_module:ToastInfoModule:methods:hideMessage"
title: "ToastInfoModule.hideMessage Method"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "methods", "hideMessage"]
---

# 📖 `ToastInfoModule.hideMessage()`

---

## 1. Method Overview & Signature

Instantly deactivates the toast notification node.

```typescript
public hideMessage(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideMessage(): void {
    this.node.active = false;
}
```
