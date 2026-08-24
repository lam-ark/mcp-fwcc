---
id: "cc_slot_module:SlotPaylineSchedule:methods:showJackpotWinSymbols"
title: "SlotPaylineSchedule.showJackpotWinSymbols Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "showJackpotWinSymbols"]
---

# 📖 `SlotPaylineSchedule.showJackpotWinSymbols()`

---

## 1. Method Overview & Signature

Presents jackpot winning symbols for AllWays/Cluster/ScatterPay games.

```typescript
protected showJackpotWinSymbols(): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
protected showJackpotWinSymbols(): Promise<void> {
    const jackpotSymbolId = this.gameConfig.SYMBOL_CONFIG.Jackpot && this.gameConfig.SYMBOL_CONFIG.Jackpot.Id;
    const duration = this.timelineConfig;
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, jackpotSymbolId, duration);

    this.stopSchedule();
    return new Promise((resolve) => {
        this.tweenSchedule = tween(this.node)
            .delay(duration)
            .call(resolve)
            .start();
    });
}
```
