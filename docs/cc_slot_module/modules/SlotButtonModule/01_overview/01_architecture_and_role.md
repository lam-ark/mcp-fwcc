---
id: "cc_slot_module:SlotButtonModule:overview:architecture_and_role"
title: "SlotButtonModule Architectural Role & Spin Input Controller"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "overview", "architecture", "spin_button"]
---

# 🏛️ SlotButtonModule Architectural Role & Spin Input Controller

---

## 1. Architectural Mission

`SlotButtonModule` is the abstract base component for all player spin input triggers. It orchestrates touch and mouse click inputs on touch hitboxes (`spinButtonTouch`), manages global keyboard Spacebar shortcuts, subscribes to reactive data model state streams (`this.gameLogic.getDataModel()[modelName]`), and broadcasts visual state changes to display renderers (`display.emit('SPIN_BUTTON_STATE_CHANGE', state)`).

```mermaid
graph TD
    Input[Touch / Mouse / Spacebar] --> SBM[SlotButtonModule]
    UIM[UIManagerModule] -->|checkDisplayPopup()| SBM
    Model[SpinButton Data Model] -->|State Watch| SBM
    SBM -->|GameLogicUIEvents| GameLogic[GameLogic / Director]
    SBM -->|SPIN_BUTTON_STATE_CHANGE| Display[Display Node: Spine / Sprite]
```

---

## 2. Key Responsibilities

1. **Spacebar Keyboard Shortcuts (`onKeyUp`)**:
   - Captures `cc.macro.KEY.space` and verifies with `UIManagerModule.checkDisplayPopup()` before dispatching `TRIGGER_SPACE_BUTTON`.
2. **Lifecycle Event Binding (`onEnable` / `onDisable`)**:
   - Cleanly attaches and detaches `cc.systemEvent` keyboard listeners to prevent memory leaks across scene reloads.
3. **Data Model Reactivity (`setupObserver`)**:
   - Observes state changes on `buttonModel` to update button interactability and visual skinning.
