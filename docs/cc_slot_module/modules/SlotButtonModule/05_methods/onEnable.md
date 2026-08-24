---
id: "cc_slot_module:SlotButtonModule:methods:onEnable"
title: "SlotButtonModule.onEnable Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onEnable"]
---

# 📖 `SlotButtonModule.onEnable()`

---

## 1. Method Overview & Signature

Binds touch and keyboard listeners when the button node is activated.

```typescript
public onEnable(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onEnable(): void {
    this.addEventListeners();
}
```
