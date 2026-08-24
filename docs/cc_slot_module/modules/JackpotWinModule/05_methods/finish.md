---
id: "cc_slot_module:JackpotWinModule:methods:finish"
title: "JackpotWinModule.finish Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "finish"]
---

# 📖 `JackpotWinModule.finish()`

---

## 1. Method Overview & Signature

Formats localized money string, plays conclusion sound, and begins exit delay sequence.

```typescript
public finish(): void
```

---

## 2. Complete Source Code Implementation

```typescript
finish(): void {
    this._lbWinAmount.string = this.moneyFormatter.formatMoney(this.jackpotValue);

    this.playSoundEnd();
    this._isUpdating = false;
    this.stopParticle();
    tween(this.node)
        .delay(this.delayHideTime)
        .call(() => {
            this._lbWinAmount.string = '';
            this.exit();
        }).start();
}
```
