---
id: "cc_slot_module:TotalWinModule:methods:startUpdateWinAmount"
title: "TotalWinModule.startUpdateWinAmount Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "startUpdateWinAmount"]
---

# 📖 `TotalWinModule.startUpdateWinAmount()`

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
    this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, this.animDuration, this._totalWinAmount, {
        onComplete: () => {
            this._tweenMoney = null;
            this._skippable = false;
            this.playSoundCountingEnd();
            this.finish();
        }
    });
}
```
