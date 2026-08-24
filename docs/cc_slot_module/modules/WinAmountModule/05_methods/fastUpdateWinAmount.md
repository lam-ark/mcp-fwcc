---
id: "cc_slot_module:WinAmountModule:methods:fastUpdateWinAmount"
title: "WinAmountModule.fastUpdateWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "fastUpdateWinAmount", "fast_forward"]
---

# 📖 `WinAmountModule.fastUpdateWinAmount()`

---

## 1. Method Overview & Signature

Accelerates active numeric count-up on user touch skip.

```typescript
public fastUpdateWinAmount({ winAmount, time }: { winAmount?: number; time: number }): void
```

---

## 2. Complete Source Code Implementation

```typescript
fastUpdateWinAmount({ winAmount, time }): void {
    if (!winAmount) {
        winAmount = this._winValue;
    }
    if (winAmount < this._currentValue || winAmount < this._winValue) {
        warn("Logic fail: Could not speed up to the smaller value", { current: this._currentValue, endValue: this._winValue, fastUpdateValue: winAmount });
        return;
    }
    this._tweenWinAmount({ winAmount, time });
}
```
