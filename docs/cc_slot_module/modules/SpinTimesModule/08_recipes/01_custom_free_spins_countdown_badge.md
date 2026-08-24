---
id: "cc_slot_module:SpinTimesModule:recipes:custom_free_spins_countdown_badge"
title: "Recipe: Implementing a Dual-Value Free Spin Progress Counter"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "recipes", "countdown_badge"]
---

# 💡 Recipe: Implementing a Dual-Value Free Spin Progress Counter

---

## 1. Subclass Implementation

```typescript
@ccclass
export class CustomFreeSpinTimesModule extends SpinTimesModule {
    @property(cc.Label) totalSpinsLabel: cc.Label = null;

    updateSpinTimes(currentSpin: number = 0, totalSpins: number = 0): void {
        super.updateSpinTimes(currentSpin);
        if (this.totalSpinsLabel && totalSpins > 0) {
            this.totalSpinsLabel.string = `/${totalSpins}`;
        }
    }
}
```
