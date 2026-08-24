---
id: "cc_slot_module:SlotButtonModule:methods:onChangeSpinState"
title: "SlotButtonNormal.onChangeSpinState Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onChangeSpinState"]
---

# 📖 `SlotButtonNormal.onChangeSpinState()`

---

## 1. Method Overview & Signature

Synchronizes auto-spin status with `gameSettings.isAutoSpin`.

```typescript
public onChangeSpinState(state: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeSpinState(state): void {
    this.gameSettings.isAutoSpin = state === eno.SPIN_BUTTON.SPIN_STATE.AUTO;
}
```
