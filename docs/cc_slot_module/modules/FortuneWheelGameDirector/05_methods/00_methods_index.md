---
id: "cc_slot_module:FortuneWheelGameDirector:methods:index"
title: "FortuneWheelGameDirector Methods Index"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "methods", "index"]
---

# 📋 FortuneWheelGameDirector Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onSpinWheel(): void`](./onSpinWheel.md)** | `public` | Dispatches `SEND_BONUS_GAME_REQUEST`, emits `START_SPIN_WHEEL`, blocks UI, and stops timer. |
| **[`_showWheelResult(bonusValue: number): Promise<void>`](./_showWheelResult.md)** | `public` | Emits `STOP_SPIN_WHEEL` with target prize segment index/value. |
| **[`_fastStopWheel(): Promise<void>`](./_fastStopWheel.md)** | `public` | Emits `FAST_STOP_WHEEL` to shorten deceleration time. |
| **[`_runAutoTrigger(): void`](./_runAutoTrigger.md)** | `public` | Handles timeout by triggering `playAutoClick()`. |
| **[`playAutoClick(): void`](./playAutoClick.md)** | `public` | Invokes `onSpinWheel()`. |
| **[`resetBonusGame(): void`](./resetBonusGame.md)** | `public` | Calls `super.resetBonusGame()` and emits `RESET_WHEEL`. |
