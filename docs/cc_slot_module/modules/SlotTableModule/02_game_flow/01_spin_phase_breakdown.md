---
id: "cc_slot_module:SlotTableModule:game_flow:spin_phase_breakdown"
title: "SlotTableModule Spin Phases Execution Breakdown"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 SlotTableModule Spin Phases Execution Breakdown

## 1. Spin Phase Breakdown

```mermaid
sequenceDiagram
    autonumber
    participant Dir as GameModeDirectorModule
    participant Table as SlotTableModule
    participant Reel as SlotReelModule (Col 0..4)
    participant NearWin as SlotTableNearWinModule

    Note over Dir,NearWin: Phase 1: Spin Acceleration & Near-Win Reset
    Dir->>Table: moduleEvent: TABLE_START_SPIN
    Table->>Table: onChangeState(TableSpinState.START)
    Table->>Reel: runReelSpin(currentMode)
    Table->>NearWin: node.emit("RESET_NEARWIN")

    Note over Dir,NearWin: Phase 2: Deceleration & Near-Win Evaluation
    Dir->>Table: moduleEvent: TABLE_STOP_SPIN (matrix)
    Table->>Table: onChangeState(TableSpinState.SHOWING_RESULT)
    Table->>NearWin: node.emit("SETUP_NEARWIN", { matrix, isTurbo })
    Table->>Reel: showResult(matrix[col], onReelStop, onReelPreStop)

    Note over Dir,NearWin: Phase 3: Sequential Stopping & Resolution
    loop Each Column Deceleration
        Reel->>Table: onReelPreStop(col) -> Emits REEL_STOP_SOUND & PRE_REEL_STOP_NEARWIN
        Reel->>Table: onReelStop(col) -> Emits REEL_STOPPED & REEL_STOP_NEARWIN
    end
    Table->>Dir: Resolves Promise<void> returned by stopSpin()
```
