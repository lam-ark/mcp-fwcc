---
id: "cc_slot_module:SpinTimesModule:methods:resetSpinTimes"
title: "SpinTimesModule.resetSpinTimes Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "resetSpinTimes"]
---

# 📖 `SpinTimesModule.resetSpinTimes()`

---

## 1. Method Overview & Signature

Clears label text and hides badge node.

```typescript
public resetSpinTimes(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetSpinTimes(): void {
    this.spinTimesLabel.string = '';
    this.node.active = false;
}
```
