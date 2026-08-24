---
id: "cc_slot_module:BonusGameTableModule:overview:lifecycle_flowchart"
title: "BonusGameTableModule Interactive Grid Flowchart"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 BonusGameTableModule Interactive Grid Flowchart

## 1. Grid Lifecycle State Flowchart

```mermaid
graph TD
    InitEvt([moduleEvent: INIT_BONUS_GAME]) --> Grid[initBoxes: Instantiate boxPrefab Matrix]
    Grid --> StartEvt([moduleEvent: START_BONUS_GAME betId])
    StartEvt --> Val[setBoxValues: Load Reward / Jackpot Tables]
    
    Val --> Wait[Waiting for Pick Action]
    Wait -->|OPEN_ITEM index, val| OpenSingle[openBox: Emit BOX_OPEN to Box Node]
    OpenSingle --> Wait
    
    Wait -->|OPEN_FINAL_ITEM index, val| OpenFinal[openFinalBox: Await Promise until Animation Done]
    OpenFinal --> AllEvt([moduleEvent: OPEN_ALL_ITEMS])
    AllEvt --> RevealAll[openAllBoxes: Reveal Unopened Boxes & Apply DIM Filter]
    RevealAll --> ResetEvt([moduleEvent: RESET_BONUS_GAME])
    ResetEvt --> Clean[resetTable: Emit BOX_RESET to all boxes]
```
