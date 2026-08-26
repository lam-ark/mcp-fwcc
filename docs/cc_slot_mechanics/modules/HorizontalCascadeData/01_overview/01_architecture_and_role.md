---
id: "cc_slot_mechanics:HorizontalCascadeData:overview:architecture_and_role"
title: "HorizontalCascadeData Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ `HorizontalCascadeData` Architectural Role & Mechanics Overview

- **Mechanics Package**: `assets/cc-common/cc-slot-mechanics/HorizontalCascade`
- **Source File**: `assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeData.ts`
- **Class Hierarchy**: `HorizontalCascadeData` ➔ `BaseDataModule`
- **Subsystem Domain**: Horizontal Cascade & Slide Refill Mechanics

---

## 1. Mathematical & Engineering Foundation

`HorizontalCascadeData` is a core runtime module within the **Horizontal Cascade & Slide Refill Mechanics**.

> **Mathematical Foundation & Formulation**:  
> Step-wise column shifting: $X_{new} = X_{current} - \Delta X$ with deceleration bounce damping.

```mermaid
graph TD
    SuperClass[BaseDataModule] --> TargetClass[HorizontalCascadeData]
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
   - Subscribes and publishes events: `TABLE_START_RESPIN`, `CASCADE_DROP_COMPLETED`, `DISAPPEAR_ANIM_END`.
