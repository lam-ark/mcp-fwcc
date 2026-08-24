---
id: "cc_slot_module:SlotPaylineSchedule:methods:stopPaylines"
title: "SlotPaylineSchedule.stopPaylines Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "stopPaylines"]
---

# 📖 `SlotPaylineSchedule.stopPaylines()`

---

## 1. Method Overview & Signature

Stops recurring schedule and fires `PAYLINE_STOP_ALL`.

```typescript
protected stopPaylines(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected stopPaylines(): void {
    this.stopSchedule();
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_STOP_ALL);
}
```
