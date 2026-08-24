---
id: "cc_slot_module:systems:cascade_and_avalanche_system:lifecycle_and_respin_flow"
title: "Cascade Lifecycle & Respin Loop Sequencing"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cascade", "lifecycle", "respin_loop", "flowchart", "sequence"]
---

# 🔄 Cascade Lifecycle & Respin Loop Sequencing

---

## 1. End-to-End Cascade Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Server as Game Server (Socket)
    participant Store as GameDataStore
    participant Writer as Mode Writer / ScriptExecutor
    participant VCM as VerticalCascadeModule
    participant Pool as SlotSymbolManager

    Note over Server, Store: Initial Spin Stop
    Server->>Store: Session packet (matrix, winLines, cascadeSteps)
    Writer->>VCM: moduleEvent.emit("TABLE_START_RESPIN")
    VCM->>VCM: checkForDropSymbols() & removeDroppedSymbols()
    VCM->>Pool: removeSymbolAt(col, row) (return to pool)

    Note over Writer, Pool: Avalanche Drop Phase
    Writer->>VCM: moduleEvent.emit("TABLE_STOP_RESPIN")
    VCM->>VCM: processOldSymbols() (calculate downward drop offsets)
    VCM->>VCM: processNewSymbols() (instantiate top incoming symbols)
    VCM->>VCM: fallingSymbols() (start cc.tween cubicIn + bounce)
    VCM-->>Writer: Promise<void> resolved after CASCADING_TIME_COMPLETED

    alt Has Subsequent Cascade Step
        Note over Writer, VCM: Loop Iteration N+1
        Writer->>VCM: Trigger next TABLE_START_RESPIN & TABLE_STOP_RESPIN
    else Cascade Finished
        Writer->>Writer: Proceed to Total Win & Round End
    end
```

---

## 2. Phase Breakdown

1. **Step 1 - Hit Identification & Elimination (`TABLE_START_RESPIN`)**:
   - Compares current table matrix with `traceWay` winning coordinates.
   - Dispatches visual explosion/disappearing effects on winning symbols and returns their nodes to `SlotSymbolManager`.
2. **Step 2 - Gravity Calculation & Spawning (`TABLE_STOP_RESPIN`)**:
   - Shifts surviving symbols downward based on empty slot counts beneath them.
   - Spawns fresh top symbols positioned offscreen above column headers (`firstPosition.y + delta`).
3. **Step 3 - Physical Tumble & Settling**:
   - Executes `cc.tween` with `cubicIn` acceleration.
   - Triggers `PLAY_ANIMATION_APPEAR` upon reaching landing coordinate.
   - Bounces upwards by $10\text{px}$ (`targetBouncePos`) before settling cleanly.
