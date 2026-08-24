---
id: "cc_slot_module:TurboButton:overview:lifecycle_flowchart"
title: "TurboButton Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 TurboButton Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Player as Player Touch
    participant TB as TurboButton
    participant Sound as SlotSoundPlayerModule
    participant GL as GameLogic
    participant Model as eno.TurboButtonData
    participant Settings as SlotGameSettings
    participant Display as display: cc.Node

    Player->>TB: TOUCH_END -> onTurboClick()
    TB->>Sound: playSfx("BTN_TURBO_ON" / "BTN_TURBO_OFF")
    TB->>GL: emit(TURBO_BUTTON_CLICK)
    
    GL->>Model: Toggle active property (true <-> false)
    Model-->>TB: Observer on 'active' triggers onTurboActive(val)
    TB->>Settings: isTurboActive = val
    TB->>Display: emit("ON_TURBO_ACTIVE", val)
```
