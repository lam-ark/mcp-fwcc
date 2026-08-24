---
id: "cc_slot_module:SlotPaylineSchedule:methods:setData"
title: "SlotPaylineSchedule.setData Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "setData"]
---

# 📖 `SlotPaylineSchedule.setData()`

---

## 1. Method Overview & Signature

Ingests winning `payLines` and `jackpotPayline` payload.

```typescript
protected setData(data: { payLines: any[], jackpotPayline: any }): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected setData(data: { payLines: any[], jackpotPayline: any }): void {
    this.payLines = data.payLines;
    this.jackpotPayline = data.jackpotPayline;
}
```
