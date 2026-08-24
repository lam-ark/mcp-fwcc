---
id: "cc_slot_module:FortuneWheelGameDirector:gotcha:turbo_timing_desync_on_fast_stop"
title: "Turbo Mode Fast Stop Animation Snap"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "gotchas", "turbo_fast_stop_snap", "animation_snap", "physics"]
---

# ⚠️ Gotcha: Turbo Mode Fast Stop Animation Snap

---

## 1. Symptom & Visual Defect
When playing in Turbo mode or when spam-clicking the wheel immediately upon spin start, the wheel abruptly teleports or snaps directly to the target segment without a smooth deceleration curve, creating an unpleasant visual glitch.

---

## 2. Root Cause & Cocos 2.4 Tween Interrupt
`_fastStopWheel()` immediately emits `"FAST_STOP_WHEEL"`. If the wheel is still in the middle of its initial acceleration tween (`cc.tween`), interrupting it without calculating current angular velocity causes an abrupt angular jump to the stopping deceleration sequence.

---

## 3. Reproduction Steps
1. Enable Turbo mode (`this.gameSettings.isTurboActive = true`).
2. Trigger wheel spin.
3. Immediately double-click screen within 100ms.
4. Observe angular rotation discontinuity.

---

## 4. Standard Fix
In `FortuneWheelModule`, enforce a minimum rotation threshold before executing fast-stop deceleration:

```typescript
// FortuneWheelModule.ts override
fastStopWheel(): void {
    if (this._currentAngularVelocity < this.config.MIN_VELOCITY_FOR_FAST_STOP) {
        // Defer fast stop until minimum rotational speed reached
        this._pendingFastStop = true;
        return;
    }
    this._executeFastStopCurve();
}
```
