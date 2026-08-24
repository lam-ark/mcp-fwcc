---
id: "cc_slot_module:SlotTableModule:overview:lifecycle_flowchart"
title: "SlotTableModule Matrix Spin Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 SlotTableModule Matrix Spin Lifecycle Flowchart

## 1. Table Spin State Flowchart

```mermaid
graph TD
    Init([TABLE_INIT]) --> InitExec[initTable: Instantiate Column Reels from reelPrefab]
    InitExec --> ReadyState[State = TableSpinState.READY]
    
    ReadyState -->|TABLE_START_SPIN| StartSpin[startSpin: State = START, runReelSpin all columns]
    StartSpin --> SpinLoop[Reels Scrolling at Steady Speed]
    
    SpinLoop -->|TABLE_STOP_SPIN matrix| StopSpin[stopSpin: State = SHOWING_RESULT, showResult on reels]
    SpinLoop -->|TABLE_FAST_STOP| FastStop[fastStop: State = STOPPING_IMMEDIATELY]
    
    StopSpin --> ReelStop[onReelStop: reelCount++, emit REEL_STOPPED]
    ReelStop --> CheckComplete{reelCount >= reels.length?}
    
    CheckComplete -->|No| NextReel[Wait for next column deceleration]
    NextReel --> ReelStop
    CheckComplete -->|Yes: All Reels Stopped| Finish[State = STOPPED, resolve _tableStopCB Promise]
```
