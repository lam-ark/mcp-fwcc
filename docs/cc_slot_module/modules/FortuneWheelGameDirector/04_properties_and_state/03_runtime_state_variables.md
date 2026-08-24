---
id: "cc_slot_module:FortuneWheelGameDirector:properties:runtime_state_variables"
title: "FortuneWheelGameDirector Runtime State Variables"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "properties", "runtime_state", "state_machine", "lifecycle"]
---

# 📊 FortuneWheelGameDirector Runtime State Variables

---

## 1. Runtime State Variables Dictionary

| Variable Name | Type | Default Value | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `isInit` | `boolean` | `false` | Set to `true` in `initBonusGame()`. | Prevents duplicate event binding and duplicate component initialization. |
| `isAutoOpen` | `boolean` | `false` | Set to `true` in `_runAutoTrigger()`. | Tracks whether current spin was triggered via player timeout. |
| `countdownTime` | `number` | `0` | Initialized to `defaultCountDown` in `startCountDown()`. | Tracks remaining seconds before auto-spin fires. |
| `_repeatCountDown` | `any` | `null` | Assigned periodic interval schedule handle. | Cleared via `stopCountDown()` when spin begins. |

---

## 2. State Transition Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Idle: enter() & resetBonusGame()
    Idle --> CountingDown: startBonusGame()
    CountingDown --> Spinning: onSpinWheel() / _runAutoTrigger()
    Spinning --> Decelerating: _showWheelResult(bonusValue)
    Decelerating --> Stopped: Wheel Lands on Target Segment
    Stopped --> [*]: Settlement Complete
```
