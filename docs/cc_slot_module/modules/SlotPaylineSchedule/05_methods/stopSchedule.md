---
id: "cc_slot_module:SlotPaylineSchedule:methods:stopSchedule"
title: "SlotPaylineSchedule.stopSchedule Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "stopSchedule"]
---

# 📖 `SlotPaylineSchedule.stopSchedule()`

---

## 1. Method Overview & Signature

Halts the active tween schedule and hides HUD payline info.

```typescript
protected stopSchedule(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected stopSchedule(): void {
    if (this.tweenSchedule) {
        this.tweenSchedule.stop();
    }
    this.tweenSchedule = null;

    if (this.node) {
        this.node.stopAllActions();
    }

    this.eventManager.emit(GameUIEvents.PAYLINE_INFO.ON_HIDE_PAYLINE_INFO);
}
```
