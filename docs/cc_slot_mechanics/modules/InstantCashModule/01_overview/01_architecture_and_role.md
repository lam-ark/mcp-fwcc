---
id: "cc_slot_mechanics:InstantCashModule:overview:architecture_and_role"
title: "InstantCashModule Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ `InstantCashModule` Architectural Role & Mechanics Overview

- **Mechanics Package**: `assets/cc-common/cc-slot-mechanics/InstantCash`
- **Source File**: `assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashModule.ts`
- **Class Hierarchy**: `InstantCashModule` ➔ `SlotBaseModule`
- **Subsystem Domain**: Hold & Win Instant Cash Prize Mechanics

---

## 1. Mathematical & Engineering Foundation

`InstantCashModule` is a core runtime module within the **Hold & Win Instant Cash Prize Mechanics**.

> **Mathematical Foundation & Formulation**:  
> Cumulative prize sum: $\text{Total Win} = \sum_{k=1}^N \text{CoinValue}_k \times \text{BetDenom}$.

```mermaid
graph TD
    SuperClass[SlotBaseModule] --> TargetClass[InstantCashModule]
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
   - Subscribes and publishes events: `INSTANT_CASH_COLLECTED`, `RESET_RESPIN_COUNT`, `SETTLE_JACKPOT_PRIZE`.
