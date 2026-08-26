---
id: "cc_slot_mechanics:NudgeReelModule:flow:lifecycle"
title: "NudgeReelModule Mechanics Game Flow & Sequence"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "game_flow", "lifecycle"]
---

# 🔄 `NudgeReelModule` Mechanics Game Flow & Execution Sequence

---

## 1. Sequence Execution Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Director as GameModeDirector
    participant Module as NudgeReelModule
    participant Table as SlotTable / Reel
    participant UI as HUD / Indicators

    Director->>Module: Initialize & Sync State
    Director->>Table: Trigger Spin / Respin
    Table->>Module: Emit Lifecycle Step Event
    Module->>Module: Calculate Mathematics & Update Grid
    Module->>UI: Emit UI Sync (e.g. NUDGE_REEL_START)
    Module-->>Director: Resolve Step Promise
```

---

## 2. Execution Phases

1. **Phase 1: Pre-Spin State Initialization**:
   - Resets counters, caches previous matrix snapshots, and registers event listeners.
2. **Phase 2: Active Spin & Dynamic Mechanics Evaluation**:
   - Evaluates reel stops, bounding boxes, or cascade explosions.
3. **Phase 3: Settle & Post-Step Synchronization**:
   - Dispatches completion events to downstream modules.
