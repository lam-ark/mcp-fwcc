---
id: "cc_slot_module:SlotButtonModule:methods:removeEventListeners"
title: "SlotButtonModule.removeEventListeners Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "removeEventListeners"]
---

# 📖 `SlotButtonModule.removeEventListeners()`

---

## 1. Method Overview & Signature

Unbinds `SystemEvent.EventType.KEY_UP` handler.

```typescript
public removeEventListeners(): void
```

---

## 2. Complete Source Code Implementation

```typescript
removeEventListeners(): void {
    systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
}
```
