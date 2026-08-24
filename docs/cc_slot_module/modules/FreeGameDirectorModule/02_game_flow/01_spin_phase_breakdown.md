---
id: "cc_slot_module:FreeGameDirectorModule:game_flow:spin_phase_breakdown"
title: "FreeGameDirectorModule 8-Phase Free Spin Loop Breakdown"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "game_flow", "spin_phases", "free_spins"]
---

# 🌀 FreeGameDirectorModule 8-Phase Free Spin Loop Breakdown

## 1. Free Spin Automated Execution Pipeline

Unlike Base Game, Free Game spins execute in an automated sequence without requiring player touch input:

```mermaid
sequenceDiagram
    autonumber
    participant Dir as FreeGameDirectorModule
    participant Writer as FreeGameWriterModule
    participant HUD as SpinTimesModule (HUD)
    participant Table as SlotTableModule (BoardFree)
    participant Cutscenes as Cutscene / TotalWin

    Note over Dir,Cutscenes: Phase 1: Mode Entry & Spin Counter Setup
    Dir->>Dir: enter() -> Plays Free BGM & syncSpinTimes()
    Dir->>HUD: Emits UPDATE_SPINTIMES (e.g. 10 Free Spins)

    Note over Dir,Cutscenes: Phase 2: Pre-Spin Trigger & Counter Decrement
    Dir->>Writer: makeScriptFreeSpinTrigger()
    Writer-->>Dir: [_beforeSpinStart, _syncPlaySessionData, _resetOnSpin, _resetTable, _decreaseFreeGameSpinTimes]
    Dir->>HUD: Decrements counter (10 -> 9)
    Dir->>Table: Clears table & paylines

    Note over Dir,Cutscenes: Phase 3: Reel Spin
    Dir->>Writer: makeScriptStartSpinning() -> [_startSpinningTable]
    Dir->>Table: Emits TABLE_START_SPIN

    Note over Dir,Cutscenes: Phase 4: State Ingestion & Reel Landing
    Dir->>Dir: onStateUpdate(data) -> parseDataPS & updateDataModules
    Dir->>Writer: makeScriptStopSpinningTable(data)
    Writer-->>Dir: [_stopSpinningTable, _setUpPaylines]
    Dir->>Table: Emits TABLE_STOP_SPIN & SETUP_PAYLINES

    Note over Dir,Cutscenes: Phase 5: Win Line & Progressive Multiplier Evaluation
    Dir->>Writer: makeScriptShowResultEntry()
    Dir->>Table: Blinks winning symbols & increments multiplier

    Note over Dir,Cutscenes: Phase 6: Spin Counter Evaluation & Next Round Loop
    alt Free Spins Remain (freeGameRemain > 0)
        Dir->>Writer: makeScriptShowResultFinal() -> getFreeGameRemainScript()
        Writer-->>Dir: [_updateSpinTimes]
        Dir->>HUD: Updates exact server spin count
        Dir->>Dir: Automatically starts next free spin loop!
    else Free Spins Finished (freeGameRemain === 0)
        Dir->>Writer: makeScriptShowResultFinal() -> getFreeGameEndScript()
        Writer-->>Dir: [_showUnskippedCutscene (TOTAL_WIN), _gameExit]
        Dir->>Cutscenes: Plays TOTAL_WIN celebration banner
        Dir->>Dir: Emits EXIT_GAME_MODE (Returns to NormalGame)
    end
```
