---
id: "cc_slot_module:PaylineLineModule:methods:onDestroy"
title: "PaylineLineModule.onDestroy Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `PaylineLineModule.onDestroy()`

---

## 1. Method Overview & Signature

Cleanup lifecycle hook unregistering listeners from `payLineEmitter`.

```typescript
protected onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
    this.unregisterPaylineEvents();
}
```
