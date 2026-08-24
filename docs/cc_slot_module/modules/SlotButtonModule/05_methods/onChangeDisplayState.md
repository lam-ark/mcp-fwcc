---
id: "cc_slot_module:SlotButtonModule:methods:onChangeDisplayState"
title: "SlotButtonNormal.onChangeDisplayState Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onChangeDisplayState"]
---

# 📖 `SlotButtonNormal.onChangeDisplayState()`

---

## 1. Method Overview & Signature

Emits `SPIN_BUTTON_STATE_CHANGE` on the `display` node, carrying new state and auto-spin status.

```typescript
public onChangeDisplayState(state: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeDisplayState(state): void {
    this.display.emit('SPIN_BUTTON_STATE_CHANGE', state, this.gameSettings.isAutoSpin);
}
```
