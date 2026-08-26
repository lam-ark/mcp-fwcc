---
id: "cc_slot_mechanics:MultiplierData:overview:architecture_and_role"
title: "MultiplierData Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["MultiplierData", "multiplier_data", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ `MultiplierData` Architectural Role & Mechanics Overview

- **Mechanics Package**: `assets/cc-common/cc-slot-mechanics/Multiplier`
- **Source File**: `assets/cc-common/cc-slot-mechanics/Multiplier/scripts/MultiplierData.ts`
- **Class Hierarchy**: `MultiplierData` ➔ `BaseDataModule`
- **Subsystem Domain**: Progressive Cascade Multiplier Engine

---

## 1. Mathematical & Engineering Foundation

`MultiplierData` is a core runtime module within the **Progressive Cascade Multiplier Engine**.

> **Mathematical Foundation & Formulation**:  
> Step multiplier accumulation: $M_{t+1} = M_t + \Delta M$ on every consecutive cascade cascade step.

```mermaid
graph TD
    SuperClass[BaseDataModule] --> TargetClass[MultiplierData]
    TargetClass --> DataPipeline[Internal State & Data Pipeline]
    TargetClass --> Orchestrator[SlotTable / Director Orchestrator]
    TargetClass --> ViewLayer[Visual Rendering & Spine Layers]
```

---

## 2. Core Responsibilities & System Invariants

1. **State & Coordinate Calculation**:
   - Manages mathematical matrix models, reel coordinates, and bounding box calculations with zero memory leaks.
2. **Director & Writer Command Pipeline**:
   - Emits asynchronous step completion signals to `ScriptExecutor` to maintain uninterrupted $60\text{ FPS}$ spin loops.
3. **Event Bus Communication**:
   - Subscribes and publishes events: `APPLY_MULTIPLIER_TO_WIN_AMOUNT`, `RESET_MULTIPLIER`, `SYNC_GAME_MULTIPLIER`.
