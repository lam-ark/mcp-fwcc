---
id: "game-implement:9666:stack_wild:sync_and_events"
title: "Red Cliff (g9666) Stack Wild Synchronization & Event Bus"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModule", "events", "synchronization", "event_bus"]
---

# 🔄 Red Cliff (g9666) Stack Wild Synchronization & Event Bus

---

## 1. Event Map & Interaction Sequence

```mermaid
sequenceDiagram
    autonumber
    participant TopReel as HorizontalTableModule9666
    participant StackWild as StackWildModule
    participant Director as GameDirectorModule9666
    participant MainTable as SlotTableModule9666

    Note over TopReel: Top horizontal reel completes spinning
    TopReel->>StackWild: emit('STACK_WILD_LANDED')
    StackWild->>StackWild: _runStackWildLanded() -> plays flame & spawns 'K' nodes
    
    Note over Director: Main vertical table completes spinning
    Director->>StackWild: emit('STACK_WILD_STOP')
    StackWild->>StackWild: onTableStop() (awaits _landedPromise)
    
    StackWild->>MainTable: emit('SYNC_STACK_WILD_TO_TABLE', { mainReelIndex, symbolNodes })
    MainTable->>MainTable: replaceWithStackWildSymbols(symbolNodes, indexes)
```

---

## 2. Event Specification

| Event Name | Bus | Sender | Receiver | Payload | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`STACK_WILD_LANDED`** | `moduleEvent` | `HorizontalTableModule9666` | `StackWildModule` | `None` | Signals top reel has stopped; initiates column flame and symbol expansion. |
| **`STACK_WILD_STOP`** | `moduleEvent` | `GameDirectorModule9666` | `StackWildModule` | `None` | Signals main table has stopped; triggers final node synchronization. |
| **`SYNC_STACK_WILD_TO_TABLE`** | `moduleEvent` | `StackWildModule` | `SlotTableModule9666` | `{ mainReelIndex, symbolNodes }` | Hands over created Stack Wild nodes to replace original column symbol slots. |
| **`PLAY_MC_STATE`** | `eventManager` | `StackWildModule` | `SpineMcStateController9666` | `SpineStateMc9666.Expand` | Plays the expansion character reaction / camera animation. |
