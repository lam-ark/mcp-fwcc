---
id: "cc_slot_module:JackpotWinModule:methods:startUpdateWinAmount"
title: "JackpotWinModule.startUpdateWinAmount Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "startUpdateWinAmount"]
---

# 📖 `JackpotWinModule.startUpdateWinAmount()`

---

## 1. Method Overview & Signature

Drives `MoneyTween.runNumber` count-up over `animDuration` ($10\text{s}$).

```typescript
public startUpdateWinAmount(): void
```

---

## 2. Complete Source Code Implementation

```typescript
startUpdateWinAmount(): void {
    this._tweenMoney = tween(this);
    this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, this.animDuration, this.jackpotValue, {
        onComplete: () => {
            this.playSoundCountingEnd();
            this._skippable = false;
            this.finish();
        }
    });
}
```
