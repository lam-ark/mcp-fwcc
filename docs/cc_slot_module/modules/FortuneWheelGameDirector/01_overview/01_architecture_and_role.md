---
id: "cc_slot_module:FortuneWheelGameDirector:overview:architecture_and_role"
title: "FortuneWheelGameDirector Wheel Mini-Game Orchestrator Architecture"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "overview", "architecture", "wheel_bonus"]
---

# 🏛️ FortuneWheelGameDirector Wheel Mini-Game Orchestrator Architecture

## 1. Executive Summary & Purpose

`FortuneWheelGameDirector` (`assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Director/FortuneWheelGameDirector.ts`) is the **Wheel of Fortune Mini-Game Director**.

Extending `BonusGameDirectorModule`, it orchestrates circular wheel spin interactions (`ON_SPIN_WHEEL`). It emits backend spin requests (`SEND_BONUS_GAME_REQUEST`), coordinates deceleration physics via `FortuneWheelModule` (`START_SPIN_WHEEL`, `STOP_SPIN_WHEEL`), supports fast-stop skipping (`_fastStopWheel`), handles timeout auto-spins (`_runAutoTrigger`), and settles final wheel rewards.

```mermaid
graph TD
    Enter[Wheel Bonus Triggered] --> Director[FortuneWheelGameDirector]
    Director --> Start[onSpinWheel: Emit SEND_BONUS_GAME_REQUEST 0]
    Start --> Phys[moduleEvent: START_SPIN_WHEEL isTurboActive]
    
    Phys --> Rec[Server Returns Target Segment Value]
    Rec --> Stop[_showWheelResult: moduleEvent STOP_SPIN_WHEEL bonusValue]
    Stop --> Settle[Wheel Decelerates & Settles on Winning Wedge]
```

---

## 2. Core Responsibilities

1. **Wheel Spin Initiation (`onSpinWheel`)**: Dispatches backend request, triggers wheel acceleration, blocks further clicks, and stops countdown timer.
2. **Result Settlement (`_showWheelResult`)**: Emits `STOP_SPIN_WHEEL` with target `bonusValue` to settle the wheel pointer on the target wedge.
3. **Fast Stop Acceleration (`_fastStopWheel`)**: Accelerates wheel deceleration when player touches screen during rotation.
4. **Auto-Spin Support (`_runAutoTrigger`, `playAutoClick`)**: Triggers `onSpinWheel()` automatically on countdown expiry.
