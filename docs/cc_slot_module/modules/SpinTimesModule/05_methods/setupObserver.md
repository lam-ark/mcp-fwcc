---
id: "cc_slot_module:SpinTimesModule:methods:setupObserver"
title: "SpinTimesModule.setupObserver Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `SpinTimesModule.setupObserver()`

---

## 1. Method Overview & Signature

Subscribes to `autoSpinCount` and `state` on `SpinButtonNormal`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.buttonNormalData = this.gameLogic.getDataModel().SpinButtonNormal;
    this.observer.watch(this.buttonNormalData, "autoSpinCount", this.updateSpinTimes.bind(this), this, { fireImmediately: true });
    this.observer.watch(this.buttonNormalData, "state", this.updateState.bind(this), this, { fireImmediately: true });
}
```
