---
id: "cc_slot_module:FortuneWheelGameDirector:game_flow:timing_execution_matrix"
title: "FortuneWheelGameDirector Timing & Execution Matrix"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "game_flow", "timing_matrix", "execution_order"]
---

# ⏱️ FortuneWheelGameDirector Timing & Execution Matrix

---

## 1. Lifecycle & Method Execution Timing

| Phase | Trigger Event | Method Invoked | Target Subsystem / Event | Failure Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- |
| **Awake / Setup** | Scene Load | `onExtendedLoad()` | Registers `ON_SPIN_WHEEL` | Spin button clicks ignored. |
| **Enter Mode** | Director Transition | `enter()` ➔ `startBonusGame()` | `RESET_WHEEL`, countdown start | Wheel visual angle remains at previous position. |
| **Spin Trigger** | UI Click / Timer Expiry | `onSpinWheel()` / `_runAutoTrigger()` | `SEND_BONUS_GAME_REQUEST`, `START_SPIN_WHEEL` | Wheel fails to spin, socket request not sent. |
| **Receive Result** | Network Response | `_showWheelResult(bonusValue)` | `STOP_SPIN_WHEEL` | Wheel spins indefinitely without stopping. |
| **Fast Stop** | Screen Tap during spin | `_fastStopWheel()` | `FAST_STOP_WHEEL` | Wheel deceleration cannot be accelerated. |
| **Reset** | Round complete / Re-entry | `resetBonusGame()` | `RESET_WHEEL` | Previous wheel result stays visible. |

---

## 2. Asynchronous Promise Chaining

```mermaid
sequenceDiagram
    participant UI as Wheel Spin Button
    participant Dir as FortuneWheelGameDirector
    participant Net as Network Socket
    participant Wheel as FortuneWheelModule

    UI->>Dir: moduleEvent: ON_SPIN_WHEEL
    Dir->>Net: emit(SEND_BONUS_GAME_REQUEST, 0)
    Dir->>Wheel: emit(START_SPIN_WHEEL, isTurboActive)
    Note over Wheel: Wheel accelerates to max speed
    Net-->>Dir: Bonus Response (Target Wedge Index)
    Dir->>Wheel: await emit(STOP_SPIN_WHEEL, bonusValue)
    Note over Wheel: Smooth deceleration & landing bounce
    Wheel-->>Dir: Promise Resolved (Stopped)
    Dir->>UI: Show Win Cutscene / Transition
```
