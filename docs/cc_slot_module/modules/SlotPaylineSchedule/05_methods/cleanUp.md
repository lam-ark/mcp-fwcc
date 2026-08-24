---
id: "cc_slot_module:SlotPaylineSchedule:methods:cleanUp"
title: "SlotPaylineSchedule.cleanUp Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "cleanUp"]
---

# 📖 `SlotPaylineSchedule.cleanUp()`

---

## 1. Method Overview & Signature

Stops recurring schedule and fires `PAYLINE_CLEAR`.

```typescript
protected cleanUp(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected cleanUp(): void {
    this.stopSchedule();
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_CLEAR);
}
```
