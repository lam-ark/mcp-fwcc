---
id: "cc_slot_module:VerticalCascadeModule:methods:getFallingTime"
title: "VerticalCascadeModule.getFallingTime Method"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "methods", "getFallingTime", "turbo_speed"]
---

# 📖 `VerticalCascadeModule.getFallingTime()`

---

## 1. Method Overview & Signature

Calculates fall, bounce, and total durations scaled by `gameSettings.isTurboActive`.

```typescript
protected getFallingTime(): {
    fallingTime: number;
    deltaTimeCubicIn: number;
    timeBouncing: number;
    totalTime: number;
}
```

---

## 2. Complete Source Code Implementation

```typescript
protected getFallingTime(): { fallingTime: number, deltaTimeCubicIn: number, timeBouncing: number, totalTime: number } {
    const isF2R = this.gameSettings.isTurboActive;
    const fallingTime = isF2R ? this.config.FALLING_TIME : this.config.FALLING_TIME * 2;
    const deltaTimeCubicIn = 3 / 60;
    const timeBouncing = isF2R ? 0.1 : 0.3;
    const totalTime = (fallingTime - deltaTimeCubicIn) + (timeBouncing * 0.3) * 2;

    return { fallingTime, deltaTimeCubicIn, timeBouncing, totalTime };
}
```
