---
id: "cc_slot_module:FortuneWheelGameDirector:method:onSpinWheel"
title: "FortuneWheelGameDirector.onSpinWheel() Method Specification"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "method", "onSpinWheel", "START_SPIN_WHEEL"]
---

# `FortuneWheelGameDirector.onSpinWheel(): void`

---

## 1. Method Signature
```typescript
public onSpinWheel(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Emits backend network request: `this.gameLogic.emit(GameLogicUIEvents.SEND_BONUS_GAME_REQUEST, 0)`.
2. Emits scoped event to wheel physics component: `this.moduleEvent.emit("START_SPIN_WHEEL", this.gameSettings.isTurboActive)`.
3. Blocks further UI clicks: `this.blockBonusGame()`.
4. Halts repeating countdown timer: `this.stopCountDown()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onSpinWheel(): void {
    this.gameLogic.emit(GameLogicUIEvents.SEND_BONUS_GAME_REQUEST, 0);
    this.moduleEvent.emit("START_SPIN_WHEEL", this.gameSettings.isTurboActive);
    this.blockBonusGame();
    this.stopCountDown();
}
```
