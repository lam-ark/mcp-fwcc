---
id: "cc_slot_module:SlotPaylineSchedule:methods:blinkAllPaylines"
title: "SlotPaylineSchedule.blinkAllPaylines Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "blinkAllPaylines"]
---

# 📖 `SlotPaylineSchedule.blinkAllPaylines()`

---

## 1. Method Overview & Signature

Stage 1 presentation step emitting `PAYLINE_BLINK_ALL` and returning a `Promise<void>` delayed by `blinkDuration`.

```typescript
protected blinkAllPaylines(_data: any): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
protected blinkAllPaylines(_data): Promise<void> {
    const blinkDuration = this.timelineConfig;

    if (!blinkDuration) {
        return Promise.resolve();
    }

    this.payLineEmitter && this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_BLINK_ALL, { blinkDuration });

    this.stopSchedule();
    return new Promise((resolve) => {
        this.tweenSchedule = tween(this.node)
            .delay(blinkDuration)
            .call(resolve)
            .start();
    });
}
```
