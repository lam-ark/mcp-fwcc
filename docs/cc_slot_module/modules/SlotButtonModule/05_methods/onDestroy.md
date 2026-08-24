---
id: "cc_slot_module:SlotButtonModule:methods:onDestroy"
title: "SlotButtonModule.onDestroy Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `SlotButtonModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observer subscriptions on `buttonModel`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.buttonModel, this);
}
```
