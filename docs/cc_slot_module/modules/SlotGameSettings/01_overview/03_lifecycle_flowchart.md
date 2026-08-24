---
id: "cc_slot_module:SlotGameSettings:overview:lifecycle_flowchart"
title: "SlotGameSettings State Transition & Speed Control Flowchart"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "overview", "lifecycle", "flowchart", "state_transitions"]
---

# 🔄 SlotGameSettings State Transition & Speed Control Flowchart

## 1. Frame 0 Initialization to Spin Round Lifecycle

```mermaid
graph TD
    Start([Frame 0: GameInit.onLoad]) --> Inst[Instantiate new SlotGameSettings]
    Inst --> Prov[provide SlotGameSettings, gameId]
    Prov --> NetAuth[GameInit.setUpGame: set isJoinGameSuccess = true]
    
    NetAuth --> IdleState[State: IDLE 0<br/>Spin Buttons Unlocked]
    
    IdleState -->|Player Taps Spin| SpinTap[Set State: WAIT_FOR_RESULT 2<br/>SlotButtonNormal locks UI]
    SpinTap -->|Socket Packet Ingested| ResRec[Set State: RESULT_RECEIVED 3<br/>Parse Data & Trigger Reels]
    ResRec -->|Reels Decelerating| ShowRes[Set State: SHOW_RESULT 4<br/>Paylines & Win Animations]
    
    ShowRes --> CheckAuto{isAutoSpin == true?}
    CheckAuto -->|Yes| SpinTap
    CheckAuto -->|No| IdleState
```

---

## 2. Speed Mode Mutation Flowchart

```mermaid
graph LR
    subgraph UI Action
        Btn[Turbo Button Clicked]
    end

    subgraph SlotGameSettings State
        Btn -->|Toggle| Turbo[isTurboActive = true / false]
        Turbo --> SpeedEnum[gameSpeed = TURBO 1 / NORMAL 0 / INSTANTLY 2]
    end

    subgraph Subsystem Response
        SpeedEnum -->|isTurboActive| Table[SlotTableModule: Shorter Tweens]
        SpeedEnum -->|isFastToResult| FX[Visual Modules: Skip Delays]
        SpeedEnum -->|gameSpeed| Director[ScriptExecutor: Scaled Step Delays]
    end
```
