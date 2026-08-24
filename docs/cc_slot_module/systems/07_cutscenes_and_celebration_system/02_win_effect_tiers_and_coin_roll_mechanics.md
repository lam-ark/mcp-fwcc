---
id: "cc_slot_module:systems:cutscenes_and_celebration_system:win_effect_tiers_and_coin_roll_mechanics"
title: "Win Effect Tiers, Dynamic Title Scaling & Coin Roll Mechanics"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cutscenes", "win_effect", "coin_roll", "money_tween", "big_win"]
---

# 💰 Win Effect Tiers, Dynamic Title Scaling & Coin Roll Mechanics

---

## 1. Multiplier Thresholds & Title Escalation

In `WinEffectModule`, the rolling count-up monitors current numerical value in `update(dt)` and escalates title banners dynamically:

```typescript
updateCurrentTitle(): void {
    if (this.currentValue >= this._superWinAmount) {
        if (this._currentTitle !== WinEffectLevelEnum.SUPER) {
            this.changeTitle(WinEffectLevelEnum.SUPER);
        }
    } else if (this.currentValue >= this._megaWinAmount) {
        if (this._currentTitle !== WinEffectLevelEnum.MEGA) {
            this.changeTitle(WinEffectLevelEnum.MEGA);
        }
    }
}
```

| Win Tier | Multiplier Threshold | Visual Banner Effect |
| :--- | :--- | :--- |
| **BIG WIN** | $\text{Win} \ge 10\times \text{Bet}$ | Standard coin particle spray + pulsing text. |
| **MEGA WIN** | $\text{Win} \ge 40\times \text{Bet}$ (`megaRate`) | Banner scales to $2.0\times$ with impact sound. |
| **SUPER WIN** | $\text{Win} \ge 25\times \text{Bet}$ (`superRate`) | Maximum particle burst + triumph fanfare. |

---

## 2. Number Rolling with `MoneyTween.runBigWinNumber`

```typescript
this._tweenMoney = this.moneyTween.runBigWinNumber(
    this._lbWinAmount.node,
    this.animDuration,
    winAmount,
    {
        onUpdate: ({ value }) => { this.currentValue = value; },
        onComplete: () => { this.finish(); }
    }
);
```
