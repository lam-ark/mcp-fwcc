---
id: "cc_slot_module:SlotPaylineSchedule:methods:onShowJackpot"
title: "SlotPaylineSchedule.onShowJackpot Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "onShowJackpot"]
---

# 📖 `SlotPaylineSchedule.onShowJackpot()`

---

## 1. Method Overview & Signature

Routes jackpot win presentation to line drawing or win symbol highlights based on `PAYLINE_TYPE`.

```typescript
protected onShowJackpot(): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
protected onShowJackpot(): Promise<void> {
    if (this.paylineConfig.PAYLINE_TYPE === PAYLINE_TYPE.Lines) {
        return this.showJackpotLine();
    } else {
        return this.showJackpotWinSymbols();
    }
}
```
