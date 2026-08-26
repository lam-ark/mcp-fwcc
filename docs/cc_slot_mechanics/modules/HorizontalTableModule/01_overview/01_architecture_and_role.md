---
id: "cc_slot_mechanics:HorizontalTableModule:overview:architecture_and_role"
title: "HorizontalTableModule Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ `HorizontalTableModule` Architectural Role & Mechanics Overview

- **Mechanics Package**: `assets/cc-common/cc-slot-mechanics/HorizontalReel`
- **Source File**: `assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableModule.ts`
- **Class Hierarchy**: `HorizontalTableModule` ➔ `SlotTableModule`
- **Subsystem Domain**: Horizontal Sub-Reel Mechanics

---

## 1. Mathematical & Engineering Foundation

`HorizontalTableModule` is a core runtime module within the **Horizontal Sub-Reel Mechanics**.

> **Mathematical Foundation & Formulation**:  
> Orthogonal single-row sub-reel spanning across Reels 2, 3, 4, 5 with horizontal symbol translation kinematics: $X(t) = X_0 - v \cdot t$.

```mermaid
graph TD
    SuperClass[SlotTableModule] --> TargetClass[HorizontalTableModule]
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
   - Subscribes and publishes events: `TABLE_STOP_SPIN_TOP`, `STACK_WILD_LANDED`, `HORIZONTAL_REEL_STOP`.
