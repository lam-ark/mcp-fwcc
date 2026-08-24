---
id: "cc_slot_module:SlotPaylineSchedule:methods:onShowBonus"
title: "SlotPaylineSchedule.onShowBonus Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "onShowBonus"]
---

# 📖 `SlotPaylineSchedule.onShowBonus()`

---

## 1. Method Overview & Signature

Emits special symbol presentation event for Bonus symbols and blocks script executor for `duration`.

```typescript
protected onShowBonus(): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
protected onShowBonus(): Promise<void> {
    const bonusSymbolId = this.gameConfig.SYMBOL_CONFIG.Bonus && this.gameConfig.SYMBOL_CONFIG.Bonus.Id;
    const duration = this.timelineConfig;
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, bonusSymbolId, duration);

    this.stopSchedule();
    return new Promise((resolve) => {
        this.tweenSchedule = tween(this.node)
            .delay(duration)
            .call(resolve)
            .start();
    });
}
```
