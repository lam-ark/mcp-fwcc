---
id: "cc_slot_module:SlotButtonModule:methods:onLoadExtend"
title: "SlotButtonModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `SlotButtonModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Registers the button node with `GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON` and runs internal `setup()`.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.emit(GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON, { gameMode: this.gameMode, node: this.node });
    this.setup();
}
```
