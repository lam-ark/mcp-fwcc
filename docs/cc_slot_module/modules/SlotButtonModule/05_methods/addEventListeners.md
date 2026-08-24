---
id: "cc_slot_module:SlotButtonModule:methods:addEventListeners"
title: "SlotButtonModule.addEventListeners Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "addEventListeners"]
---

# 📖 `SlotButtonModule.addEventListeners()`

---

## 1. Method Overview & Signature

Registers global system keyboard listeners for `KEY_UP` events.

```typescript
public addEventListeners(): void
```

---

## 2. Complete Source Code Implementation

```typescript
addEventListeners(): void {
    systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
}
```
