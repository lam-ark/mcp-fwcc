---
id: "cc_slot_module:SlotPaylineSchedule:methods:resetAllEffectAndTasks"
title: "SlotPaylineSchedule.resetAllEffectAndTasks Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "resetAllEffectAndTasks"]
---

# 📖 `SlotPaylineSchedule.resetAllEffectAndTasks()`

---

## 1. Method Overview & Signature

Handles emergency interrupt reset by invoking `cleanUp()`, stopping active tweens, and emitting `PAYLINE_CLEAR`.

```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected resetAllEffectAndTasks(): void {
    this.cleanUp();
}
```
