---
id: "cc_slot_module:WinEffectModule:methods:finish"
title: "WinEffectModule.finish Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "finish"]
---

# 📖 `WinEffectModule.finish()`

---

## 1. Method Overview & Signature

Formats final amount, plays victory end sound, and starts exit delay tween.

```typescript
public finish(): void
```

---

## 2. Complete Source Code Implementation

```typescript
finish(): void {
    this.playSoundEnd();
    this._skippable = false;
    this._isUpdating = false;
    this.currentValue = this.content.winAmount;
    this.updateCurrentTitle();
    this._lbWinAmount.string = this.moneyFormatter.formatMoney(this.content.winAmount);

    this.winAmount.stopAllActions();
    this.stopParticle();

    if (this._tweenFinish) {
        this._tweenFinish.stop();
        this._tweenFinish = null;
    }

    this._tweenFinish = tween(this.node)
        .delay(this.delayHideTime)
        .call(() => {
            this.exit();
        })
        .start();
}
```
