---
id: "cc_slot_module:SlotPaylineSchedule:methods:showPayline"
title: "SlotPaylineSchedule.showPayline Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "showPayline"]
---

# 📖 `SlotPaylineSchedule.showPayline()`

---

## 1. Method Overview & Signature

Synchronizes bottom HUD payline info and emits `PAYLINE_SHOW_LINE` to follower visual layers.

```typescript
protected showPayline(payline: any, duration: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showPayline(payline, duration: number): void {
    if (this.paylineConfig.IS_DEBUG) {
        log(`[BasePaylineSchedule] showPayline`, payline);
    }
    const symbolCount = payline.reelCount || payline.payLineWinNumbers;
    if (symbolCount) {
        payline.symbolCount = symbolCount;
    }
    this.eventManager.emit(GameUIEvents.PAYLINE_INFO.ON_SHOW_PAYLINE_INFO, payline);
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_LINE, payline, duration);
}
```
