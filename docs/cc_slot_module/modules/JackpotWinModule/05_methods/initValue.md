---
id: "cc_slot_module:JackpotWinModule:methods:initValue"
title: "JackpotWinModule.initValue Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "initValue"]
---

# 📖 `JackpotWinModule.initValue()`

---

## 1. Method Overview & Signature

Unpacks jackpot tier name and value from payload and arms quick show lock timer.

```typescript
public initValue(): void
```

---

## 2. Complete Source Code Implementation

```typescript
initValue(): void {
    this.jackpotType = this.content.jackpotType || "GRAND";
    this.jackpotValue = this.content.jackpotValue || 0;
    this.currentValue = 0;
    this._lbWinAmount.string = '';
    this._isUpdating = true;
    this._skippable = false;
    this._hasClicked = false;
    this.bindQuickShow();
}
```
