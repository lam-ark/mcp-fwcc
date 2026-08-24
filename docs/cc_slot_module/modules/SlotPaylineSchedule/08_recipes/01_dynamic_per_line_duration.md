---
id: "cc_slot_module:SlotPaylineSchedule:recipes:dynamic_per_line_duration"
title: "Recipe: Dynamic Per-Line Presentation Timings Based on Payout Tier"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "recipes", "dynamic_timing"]
---

# 💡 Recipe: Dynamic Per-Line Presentation Timings Based on Payout Tier

---

## 1. Objective

Instead of a static 2-second interval, hold presentation on high-paying lines for 3.5 seconds while cycling minor wins in 1.2 seconds.

```typescript
@ccclass
export class DynamicTimingPaylineSchedule extends SlotPaylineSchedule {
    protected showAllPaylines(): void {
        this.stopSchedule();

        if (!this.payLines || this.payLines.length === 0) {
            return;
        }

        const actions: cc.Tween[] = [];
        this.payLines.sort((a, b) => a.payLineID - b.payLineID);

        for (let i = 0; i < this.payLines.length; i++) {
            const line = this.payLines[i];
            // High multiplier lines get longer hold duration
            const duration = (line.winAmount && line.winAmount > 100000) ? 3.5 : 1.5;

            actions.push(cc.tween().call(() => this.showPayline(line, duration)));
            actions.push(cc.tween().delay(duration));
        }

        this.tweenSchedule = cc.tween(this.node)
            .sequence(...actions)
            .repeatForever()
            .start();
    }
}
```
