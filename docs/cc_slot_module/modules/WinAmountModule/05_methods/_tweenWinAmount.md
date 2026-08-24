---
id: "cc_slot_module:WinAmountModule:methods:tweenWinAmount"
title: "WinAmountModule._tweenWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "_tweenWinAmount", "tween"]
---

# 📖 `WinAmountModule._tweenWinAmount()`

---

## 1. Method Overview & Signature

Drives `MoneyTween.runNumber()` count-up animation and resolves callback on complete.

```typescript
private _tweenWinAmount({ winAmount = 0, time = 0 }: { winAmount: number; time: number }): void
```

---

## 2. Complete Source Code Implementation

```typescript
_tweenWinAmount({ winAmount = 0, time = 0 }): void {
    this._resetLabel();
    if (time === 0) {
        this.currentValue = winAmount;
        this.resetCallBack();
        log("show win Amount instantly", { winAmount, time });
        return;
    }
    this._tweenValue = this.moneyTween.runNumber(this.labelWinAmount.node, time, winAmount, {
        onComplete: () => {
            this.currentValue = winAmount;
            this.resetCallBack();
            this._tweenValue = null;
        }
    });
}
```
