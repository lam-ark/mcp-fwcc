---
id: "cc_slot_module:FortuneWheelGameDirector:gotcha:missing_stop_spin_wheel_hang"
title: "Missing STOP_SPIN_WHEEL Indefinite Spin Hang"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "gotchas", "missing_stop_spin_wheel_hang", "network_timeout", "freeze"]
---

# ⚠️ Gotcha: Missing `STOP_SPIN_WHEEL` Indefinite Spin Hang

---

## 1. Symptom & Visual Defect
The player triggers the Fortune Wheel mini-game and taps Spin. The wheel begins spinning and accelerates to full speed, but never decelerates, spinning indefinitely and locking the game state.

---

## 2. Root Cause & Architecture Detail
`FortuneWheelGameDirector.onSpinWheel()` emits `"START_SPIN_WHEEL"`, placing `FortuneWheelModule` in a continuous rotation loop. The wheel will only decelerate when `_showWheelResult(bonusValue)` emits `"STOP_SPIN_WHEEL"`. If network disconnection occurs or if the server response payload is malformed/dropped, the writer pipeline never calls `_showWheelResult()`.

---

## 3. Reproduction Steps
1. Enter Fortune Wheel game mode.
2. Tap "Spin Wheel".
3. Disconnect network or mock dropped response before server returns target wedge.
4. Observe the wheel spinning endlessly without error popup.

---

## 4. Standard Fix & Guard Implementation
Implement a network timeout fallback in the custom director subclass:

```typescript
// CustomFortuneWheelDirector.ts
onSpinWheel(): void {
    super.onSpinWheel();
    
    // Safety timeout fallback
    this.scheduleOnce(() => {
        if (!this.dataStore.playSession.bonusResultReceived) {
            cc.warn("[FortuneWheel] Network response timed out, checking recovery state");
            this.gameLogic.emit("HANDLE_NETWORK_TIMEOUT");
        }
    }, 10.0);
}
```
