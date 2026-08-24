---
id: "cc_slot_module:WinEffectModule:methods:onClick"
title: "WinEffectModule.onClick Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "onClick", "skip"]
---

# 📖 `WinEffectModule.onClick()`

---

## 1. Method Overview & Signature

Player screen tap handler that fast-forwards rolling money counts to final totals.

```typescript
public onClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClick(): void {
    if (!this._isUpdating || this._speedUp) {
        return;
    }
    if (!this._skippable) {
        return;
    }
    this.playSoundSkip();

    this._speedUp = true;
    this._skippable = false;
    this.winAmount.stopAllActions();
    this.node.stopAllActions();

    if (this._tweenMoney) {
        this._tweenMoney.stop();
        this._tweenMoney = null;
    }

    this.playSoundCountingEnd();
    this.currentValue = this.content.winAmount;
    this.finish();
}
```
