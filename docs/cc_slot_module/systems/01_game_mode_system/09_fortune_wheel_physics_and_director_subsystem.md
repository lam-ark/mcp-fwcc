---
id: "cc_slot_module:systems:game_mode:fortune_wheel_physics_and_subsystem"
title: "Fortune Wheel Mini-Game: Angular Physics & Director Subsystem"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "game_mode", "fortune_wheel", "wheel_physics", "angular_deceleration", "flow", "module_linkage"]
---

# 🎡 Fortune Wheel Mini-Game: Angular Physics & Director Subsystem

---

## 1. Subsystem Architecture Map

The **Fortune Wheel Mini-Game Subsystem** (`assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/`) coordinates circular prize wheel physics, target segment settling, countdown timers, and win presentation:

```mermaid
graph TD
    subgraph FortuneWheel Prefab Ecosystem
        Director[1. FortuneWheelGameDirector: State, Countdown & Fast Stop]
        View[2. FortuneWheelModule: Rotational Physics & Pointer Tweens]
        Data[3. FortuneWheelModuleData: Target Angle & Segment Parser]
        Config[4. FortuneWheelModuleConfig: Deceleration Curves & Speeds]
    end

    GDS[GameDataStore: wheelData] --> Data
    Director -->|spinWheel / stopWheel| View
    Data -->|Calculates Target Angle delta| View
    Config -->|Provides Spin Duration & Easing| View
    Director -->|Auto Trigger on 15s Timeout| Director
```

---

## 2. Granular Responsibilities by Component

### 1. `FortuneWheelGameDirector` (Master Mini-Game Orchestrator)
* **Role**: Inherits from `GameModeDirectorModule`.
* **Key Features**:
  - Countdown timer with auto-click fallback (`_runAutoTrigger()`, `playAutoClick()`).
  - Fast-stop handling (`_fastStopWheel()`).
  - Win presentation and transition back to primary game mode (`_showWheelResult()`, `resetBonusGame()`).

### 2. `FortuneWheelModule` (Rotational Physics Controller)
* **Role**: Visual controller rotating the wheel disk node and animating the flapper/pointer peg deflection.
* **Physics Equation**:
  $$\theta_{\text{final}} = 360^\circ \times N_{\text{spins}} + \theta_{\text{target\_segment}} + \theta_{\text{jitter}}$$

### 3. `FortuneWheelModuleData` (Target Angle & Prize Parser)
* **Role**: Ingests server prize index and calculates target rotational angle based on segment count ($N_{\text{segments}}$).

### 4. `FortuneWheelModuleConfig` (Deceleration Curves)
* **Role**: Defines rotation speeds, spin duration (e.g. $4.5\text{s}$ normal, $1.2\text{s}$ fast), and easing curves (`easeCubicActionOut`).

---

## 3. Wheel Spin & Settling Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Player as User Click
    participant Dir as FortuneWheelGameDirector
    participant Wheel as FortuneWheelModule
    participant Net as GameLogic Network

    Dir->>Dir: enter() -> starts 15s countdown
    alt Player Clicks Spin Wheel
        Player->>Dir: onSpinWheel()
    else Countdown Timeout
        Dir->>Dir: _runAutoTrigger() -> playAutoClick()
    end

    Dir->>Net: sendSpinWheelRequest()
    Net-->>Dir: Server Response { targetIndex: 5, prize: 5000 }
    Dir->>Wheel: startSpinWheel(targetAngle)
    Wheel->>Wheel: Rotates disk with peg collision sounds
    Wheel->>Wheel: Settles on target segment with easeCubicActionOut
    Wheel-->>Dir: onWheelStopped() callback
    Dir->>Dir: _showWheelResult() -> MoneyTween win celebration
    Dir->>Dir: resetBonusGame() -> transitionGameMode(NORMAL_GAME)
```
