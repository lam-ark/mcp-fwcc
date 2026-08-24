---
id: "cc_slot_module:SlotButtonModule:overview:lifecycle_flowchart"
title: "SlotButtonModule Lifecycle & Gesture Sequence Flowchart"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "overview", "lifecycle", "flowchart", "gestures"]
---

# 🔄 SlotButtonModule Lifecycle & Gesture Sequence Flowchart

---

## 1. Complete Interaction Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Player as Player Finger / Mouse
    participant SBN as SlotButtonNormal
    participant Timer as scheduleOnce Timer
    participant GL as GameLogic
    participant Display as SlotButtonSpine / SlotButtonSprite

    Player->>SBN: TOUCH_START
    SBN->>Timer: scheduleOnce(holdAction, 0.7s)
    
    alt Player Releases Before 0.7s (Standard Tap)
        Player->>SBN: TOUCH_END / TOUCH_CANCEL
        SBN->>Timer: unschedule(holdAction)
        SBN->>SBN: onSpinClick() -> isHold == false
        SBN->>GL: emit(NORMAL_SPIN_CLICKED)
        GL-->>SBN: buttonModel.state -> SPINNING
        SBN->>Display: emit(SPIN_BUTTON_STATE_CHANGE, SPINNING)
    else Player Holds Longer Than 0.7s (Auto Spin Gesture)
        Timer-->>SBN: holdAction() executes
        SBN->>SBN: isHold = true
        SBN->>GL: emit(START_AUTO_SPIN)
        Player->>SBN: TOUCH_END (Finger released)
        SBN->>SBN: onSpinClick() -> suppressed because isHold == true
    end
```
