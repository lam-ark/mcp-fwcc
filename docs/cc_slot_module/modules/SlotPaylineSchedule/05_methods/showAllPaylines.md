---
id: "cc_slot_module:SlotPaylineSchedule:methods:showAllPaylines"
title: "SlotPaylineSchedule.showAllPaylines Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "showAllPaylines"]
---

# 📖 `SlotPaylineSchedule.showAllPaylines()`

---

## 1. Method Overview & Signature

Builds and starts an infinite repeating `cc.tween` sequence cycling through each winning line.

```typescript
protected showAllPaylines(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showAllPaylines(): void {
    this.stopSchedule();

    if (!this.payLines || this.payLines.length === 0) {
        if (this.paylineConfig.IS_DEBUG) {
            warn('[SlotTablePaylineModule] No payLines to schedule');
        }
        return;
    }

    const actions: cc.Tween[] = [];
    this.payLines.sort((a, b) => a.payLineID - b.payLineID);
    for (let i = 0; i < this.payLines.length; i++) {
        const duration = this.timelineConfig;
        actions.push(tween().call(() => this.showPayline(this.payLines[i], duration)));
        actions.push(tween().delay(duration));
    }

    this.tweenSchedule = tween(this.node)
        .sequence(...actions)
        .repeatForever()
        .start();
}
```
