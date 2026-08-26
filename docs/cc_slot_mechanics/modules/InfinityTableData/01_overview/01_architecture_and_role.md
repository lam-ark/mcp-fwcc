---
id: "cc_slot_mechanics:InfinityTableData:overview:architecture_and_role"
title: "InfinityTableData Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["InfinityTableData", "infinity_table_data", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ `InfinityTableData` Architectural Role & Mechanics Overview

- **Mechanics Package**: `assets/cc-common/cc-slot-mechanics/InfinityReel`
- **Source File**: `assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableData.ts`
- **Class Hierarchy**: `InfinityTableData` ➔ `SlotTableData`
- **Subsystem Domain**: Dynamic Column Expansion Mechanics

---

## 1. Mathematical & Engineering Foundation

`InfinityTableData` is a core runtime module within the **Dynamic Column Expansion Mechanics**.

> **Mathematical Foundation & Formulation**:  
> Expands rightmost column $C_{new} = C_{current} + 1$ upon winning symbol landing on right edge.

```mermaid
graph TD
    SuperClass[SlotTableData] --> TargetClass[InfinityTableData]
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
   - Subscribes and publishes events: `INFINITY_ADD_REEL`, `INFINITY_EXPAND_COMPLETE`, `INFINITY_RESET`.
