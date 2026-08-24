---
id: "cc_slot_module:SlotButtonModule:methods:onSwitchingMode"
title: "SlotButtonNormal.onSwitchingMode Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onSwitchingMode"]
---

# 📖 `SlotButtonNormal.onSwitchingMode()`

---

## 1. Method Overview & Signature

Handles mode switching transitions by detaching event listeners and cancelling active touches while switching.

```typescript
public onSwitchingMode(isSwitching: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSwitchingMode(isSwitching: boolean): void {
    this._isSwitchingMode = isSwitching;
    this.removeEventListeners();
    if (!isSwitching) {
        this.addEventListeners();
    }
    this.cancelButtonEvents();
}
```
