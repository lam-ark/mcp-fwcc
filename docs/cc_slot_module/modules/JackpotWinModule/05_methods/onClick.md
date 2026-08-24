---
id: "cc_slot_module:JackpotWinModule:methods:onClick"
title: "JackpotWinModule.onClick Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "onClick"]
---

# 📖 `JackpotWinModule.onClick()`

---

## 1. Method Overview & Signature

Player tap handler that cancels the 10s tween and launches an accelerated 1s tween to count up to the final total.

```typescript
public onClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClick(): void {
    if (!this._isUpdating) {
        return;
    }
    if (!this._skippable) {
        return;
    }
    if (!this._hasClicked) {
        this._hasClicked = true;
    } else {
        return;
    }
    
    this.playSoundSkip();

    if (this._tweenMoney) {
        this._tweenMoney.stop();
        this._tweenMoney = null;
    }

    this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, 1, this.jackpotValue, {
        onComplete: () => {
            this.playSoundCountingEnd();
            this.finish();
        }
    });
}
```
