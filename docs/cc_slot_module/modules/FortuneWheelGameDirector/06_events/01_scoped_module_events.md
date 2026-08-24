---
id: "cc_slot_module:FortuneWheelGameDirector:events:scoped_module_events"
title: "FortuneWheelGameDirector Scoped Module Events (moduleEvent)"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "events", "scoped_events", "moduleEvent", "wheel_events"]
---

# 📡 FortuneWheelGameDirector Scoped Module Events (`moduleEvent`)

---

## 1. Subscribed Scoped Events (`this.moduleEvent.on`)

| Event Topic | Payload Type | Handler Method | Purpose & Reaction |
| :--- | :--- | :--- | :--- |
| `ON_SPIN_WHEEL` | `void` | `this.onSpinWheel` | Triggered when player taps spin button on wheel HUD. Initiates spin and socket request. |

---

## 2. Emitted Scoped Events (`this.moduleEvent.emit`)

| Event Topic | Payload Arguments | Trigger Method | Consuming Components |
| :--- | :--- | :--- | :--- |
| `START_SPIN_WHEEL` | `isTurboActive: boolean` | `onSpinWheel()` | `FortuneWheelModule` (Begins wheel acceleration and constant rotation loop). |
| `STOP_SPIN_WHEEL` | `bonusValue: number` | `_showWheelResult()` | `FortuneWheelModule` (Initiates deceleration towards target index). |
| `FAST_STOP_WHEEL` | `void` | `_fastStopWheel()` | `FortuneWheelModule` (Shortens deceleration time to fast stop). |
| `RESET_WHEEL` | `void` | `resetBonusGame()` | `FortuneWheelModule` (Resets wheel angle to default 0). |
| `INIT_BONUS_GAME` | `void` | `initBonusGame()` | Sub-modules initializing wheel layout and sector labels. |
