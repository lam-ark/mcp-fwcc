---
id: "cc_slot_module:SpinTimesModule:methods:updateState"
title: "SpinTimesModule.updateState Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "updateState"]
---

# 📖 `SpinTimesModule.updateState()`

---

## 1. Method Overview & Signature

Resets spin times badge when button state returns to `BUTTON_STATE_ENUM.NORMAL`.

```typescript
public updateState(state: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateState(state): void {
    if (state === BUTTON_STATE_ENUM.NORMAL) {
        this.resetSpinTimes();
    }
}
```
