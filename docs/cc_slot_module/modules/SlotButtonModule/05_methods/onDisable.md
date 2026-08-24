---
id: "cc_slot_module:SlotButtonModule:methods:onDisable"
title: "SlotButtonModule.onDisable Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onDisable"]
---

# 📖 `SlotButtonModule.onDisable()`

---

## 1. Method Overview & Signature

Unbinds touch and keyboard listeners when the button node is deactivated.

```typescript
public onDisable(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDisable(): void {
    this.removeEventListeners();
}
```
