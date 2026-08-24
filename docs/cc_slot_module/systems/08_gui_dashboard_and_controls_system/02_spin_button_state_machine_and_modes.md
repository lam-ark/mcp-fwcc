---
id: "cc_slot_module:systems:gui_dashboard:spin_button_state_machine"
title: "Spin Button State Machine, Touch Gestures & Mode Specialization"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "gui_dashboard", "spin_button", "fsm", "touch_gestures", "auto_spin"]
---

# 🔘 Spin Button State Machine, Touch Gestures & Mode Specialization

---

## 1. Class Hierarchy

```mermaid
classDiagram
    SlotBaseModule <|-- SlotButtonModule
    SlotButtonModule <|-- SlotButtonNormal
    SlotButtonModule <|-- SlotButtonFree
    SlotButtonModule <|-- SlotButtonLightning
    
    class SlotButtonModule {
        +gameMode: GAME_MODE_ENUM
        +spinButtonTouch: cc.Node
        +display: cc.Node
        +onKeyUp(event)
    }
    
    class SlotButtonNormal {
        +holdToAutoSpin: boolean
        +holdTime: number = 0.7
        +onTouchStart()
        +onTouchCancel()
        +onSpinClick()
        +onStopClick()
    }
```

---

## 2. Finite State Machine (FSM)

The spin button switches visual states driven by `buttonModel.state` (`SPIN_BUTTON_STATE_ENUM`):

```mermaid
stateDiagram-v2
    [*] --> NORMAL: Game Ready
    NORMAL --> HOVER: Mouse Enter (Desktop)
    HOVER --> NORMAL: Mouse Leave
    NORMAL --> SPINNING: Click / Space / Auto
    SPINNING --> FAST_STOP: User Click during spin
    FAST_STOP --> DISABLE: Waiting for reel stop
    DISABLE --> NORMAL: Round Settle
```

---

## 3. Hold-to-Auto Gesture ($0.7\text{s}$)

In `SlotButtonNormal.ts`:
- **`TOUCH_START`**: Schedules `holdAction` to fire after `holdTime` ($0.7\text{s}$).
- **`TOUCH_END` / `TOUCH_CANCEL`**: If the finger is released before $0.7\text{s}$, the schedule is cancelled and a normal `NORMAL_SPIN_CLICKED` spin fires.
- If $0.7\text{s}$ elapses, `START_AUTO_SPIN` emits and `isHold = true` suppresses the click release action.
