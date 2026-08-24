---
id: "cc_slot_module:SpinTimesModule:methods:updateSpinTimes"
title: "SpinTimesModule.updateSpinTimes Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "updateSpinTimes"]
---

# 📖 `SpinTimesModule.updateSpinTimes()`

---

## 1. Method Overview & Signature

Updates remaining round numeric text and renders `'∞'` for unbounded quantities (`> 100000`).

```typescript
public updateSpinTimes(spinTimes: number = 0): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateSpinTimes(spinTimes: number = 0): void {
    if (spinTimes < 0) {
        return this.resetSpinTimes();
    }
    this.node.active = true;
    if (spinTimes > 100000) {
        this.spinTimesLabel.string = '∞';       
    } else {
        this.spinTimesLabel.string = spinTimes.toString();
    }
}
```
