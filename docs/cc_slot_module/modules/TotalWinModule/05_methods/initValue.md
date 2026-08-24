---
id: "cc_slot_module:TotalWinModule:methods:initValue"
title: "TotalWinModule.initValue Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "initValue"]
---

# 📖 `TotalWinModule.initValue()`

---

## 1. Method Overview & Signature

Resets internal state counters, pulls aggregate win, and arms quick show lock timer.

```typescript
public initValue(): void
```

---

## 2. Complete Source Code Implementation

```typescript
initValue(): void {
    this.currentValue = 0;
    this._lbWinAmount.string = '';
    this._isUpdating = true;
    this._skippable = false;
    this._hasSkip = false;
    this._totalWinAmount = this.getTotalWinAmount();
    this.bindQuickShow();
}
```
