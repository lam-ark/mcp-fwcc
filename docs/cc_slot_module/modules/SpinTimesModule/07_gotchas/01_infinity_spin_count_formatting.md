---
id: "cc_slot_module:SpinTimesModule:gotchas:infinity_spin_count_formatting"
title: "Gotcha: Text Overflow from Unbounded Spin Quantities"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "gotchas", "formatting"]
---

# ⚠️ Gotcha: Text Overflow from Unbounded Spin Quantities

---

## 1. Problem Description

When players select "Infinity / Unlimited" auto-spins, server payloads or test suites assign `999999`. Directly assigning `toString()` overflows the round badge boundary.

---

## 2. Prevention

`updateSpinTimes` enforces:
```typescript
if (spinTimes > 100000) {
    this.spinTimesLabel.string = '∞';       
} else {
    this.spinTimesLabel.string = spinTimes.toString();
}
```
