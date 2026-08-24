---
id: "cc_slot_module:SlotTableNearWinModule:director_writer:pipeline_orchestration"
title: "SlotTableNearWinModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotTableNearWinModule Pipeline Orchestration

---

## 1. Interaction Pipeline

`SlotTableNearWinModule` acts as an event-driven slave to `SlotTableModule`. When Writer/Director commands trigger reel stops, the pipeline proceeds as follows:

```mermaid
graph LR
    Director[GameDirector] -->|showReelMatrix| Table[SlotTableModule]
    Table -->|node.emit SETUP_NEARWIN| NW[SlotTableNearWinModule]
    NW -->|Calculates flags| Reels[SlotReelModule Array]
    Reels -->|Reel k lands| Table
    Table -->|node.emit REEL_STOP_NEARWIN| NW
    NW -->|Plays effect on Reel k+1| VFX[nearWinEffect]
```

---

## 2. Writer Integration Points

1. **`makeScriptStopTable`**: Writer dispatches table stop command. `SlotTableModule` executes reel deceleration, firing `REEL_STOP_NEARWIN` after each reel reaches standstill.
2. **Fast-To-Result (FTR) Abort**: When player clicks Fast Stop, the Director accelerates the action queue, calling `isFastToResult()` which skips subsequent anticipation animations.
