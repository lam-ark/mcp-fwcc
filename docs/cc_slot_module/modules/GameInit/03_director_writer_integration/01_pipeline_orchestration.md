---
id: "cc_slot_module:GameInit:director_writer:pipeline_orchestration"
title: "GameInit Integration with 3-Tier Pipeline Orchestration"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "director_writer", "pipeline", "orchestration", "architecture"]
---

# ⚙️ GameInit Integration with 3-Tier Pipeline Orchestration

## 1. The 3-Tier Pipeline Foundation

The slot engine operates on a 3-tier pipeline: **Writers (Script Generators) ➔ Directors (State Machine Orchestrators) ➔ Visual Modules (Executors)**.

`GameInit` establishes the foundational infrastructure enabling this pipeline:

```mermaid
graph TD
    subgraph Foundation Tier (GameInit)
        GI[GameInit.ts]
        GDS[GameDataStore]
        GEM[GameEventManager]
        SCH[Scheduler]
    end

    subgraph Tier 1: Writers (Script Definition)
        NW[NormalGameWriterModule]
        FW[FreeGameWriterModule]
    end

    subgraph Tier 2: Directors (Action Dispatching)
        ND[NormalGameDirectorModule]
        FD[FreeGameDirectorModule]
        SE[ScriptExecutor]
    end

    subgraph Tier 3: Visual Modules (Rendering & Tweens)
        Table[SlotTableModule]
        UI[UIManagerModule / PaylineInfoModule]
        Sound[SlotSoundPlayerModule]
    end

    GI -->|Provides State & Bus| GDS & GEM & SCH
    GDS -. Reads Payload .-> NW & FW
    NW & FW -->|Generates Command Queue| SE
    ND & FD -->|Coordinates via SE| Table & UI & Sound
```

---

## 2. Injected Services Provided to the Pipeline

1. **`GameDataStore`**: Ingests raw server spin payloads and converts them into normalized matrices read by Writers.
2. **`GameEventManager`**: Allows Directors to coordinate transitions (e.g. `TRANSITION_TO_FREE_GAME`).
3. **`Scheduler`**: Enables `ScriptExecutor` to run timed delay commands (`delayAction`, `tweenDelayTimeScript`) reliably.
