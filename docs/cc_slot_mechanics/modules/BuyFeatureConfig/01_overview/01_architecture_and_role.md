---
id: "cc_slot_mechanics:BuyFeatureConfig:overview:architecture_and_role"
title: "BuyFeatureConfig Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["BuyFeatureConfig", "buy_feature_config", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ `BuyFeatureConfig` Architectural Role & Mechanics Overview

- **Mechanics Package**: `assets/cc-common/cc-slot-mechanics/BuyFeature`
- **Source File**: `assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureConfig.ts`
- **Class Hierarchy**: `BuyFeatureConfig` ➔ `Component`
- **Subsystem Domain**: Direct Feature Purchase Modal System

---

## 1. Mathematical & Engineering Foundation

`BuyFeatureConfig` is a core runtime module within the **Direct Feature Purchase Modal System**.

> **Mathematical Foundation & Formulation**:  
> Purchase price formula: $\text{Cost} = \text{Total Bet} \times \text{CostMultiplier}$ (e.g. $100\times$).

```mermaid
graph TD
    SuperClass[Component] --> TargetClass[BuyFeatureConfig]
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
   - Subscribes and publishes events: `BUY_FEATURE_CLICKED`, `CONFIRM_BUY_FEATURE`, `START_PURCHASED_FEATURE`.
