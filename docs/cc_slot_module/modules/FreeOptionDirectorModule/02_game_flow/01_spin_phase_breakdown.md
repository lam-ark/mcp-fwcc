---
id: "cc_slot_module:FreeOptionDirectorModule:game_flow:spin_phase_breakdown"
title: "FreeOptionDirectorModule Interaction Phase Breakdown"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 FreeOptionDirectorModule Interaction Phase Breakdown

## 1. Interaction Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Dir as FreeOptionDirectorModule
    participant UI as Option Button Nodes
    participant Lbl as CountDown Label
    participant Net as GameLogic Network Layer

    Note over Dir,UI: 1. Feature Option Display
    Dir->>UI: onEnableOptions(true)
    Dir->>Lbl: startCountDown() (15s)
    
    Note over Dir,Lbl: 2. Pacing Countdown
    loop Every 1 Second
        Dir->>Lbl: updateCountdownText(remaining)
    end
    
    Note over UI,Net: 3. Selection & Network Request
    UI->>Dir: optionClick(ev, optionId)
    Dir->>UI: onEnableOptions(false) (Disable all buttons)
    Dir->>Dir: stopCountDown()
    Dir->>Net: emit(SEND_FREE_OPTION_REQUEST, selectedOption)
```
