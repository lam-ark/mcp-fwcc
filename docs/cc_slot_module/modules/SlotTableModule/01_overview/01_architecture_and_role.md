---
id: "cc_slot_module:SlotTableModule:overview:architecture_and_role"
title: "SlotTableModule Matrix & Reel Table Engine Architecture"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "overview", "architecture", "reel_matrix", "table_engine"]
---

# 🏛️ SlotTableModule Matrix & Reel Table Engine Architecture

## 1. Executive Summary & Purpose

`SlotTableModule` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModule.ts`) is the **Master Table Grid Orchestrator** in the `cc-common` Slot SDK.

Extending `SlotBaseModule`, it dynamically instantiates and manages the column reels (`reelPrefab`), routes spinning lifecycle commands (`TABLE_START_SPIN`, `TABLE_STOP_SPIN`, `TABLE_FAST_STOP`), interfaces with `SlotSymbolManager` for symbol recycling, controls Near-Win anticipation VFX (`SETUP_NEARWIN`), and returns a unified async `Promise` when all columns complete their deceleration bounce.

```mermaid
graph TD
    Director[GameModeDirectorModule / Writer] -->|TABLE_START_SPIN| Table[SlotTableModule]
    Director -->|TABLE_STOP_SPIN matrix| Table
    
    subgraph Reel Column Management
        Table -->|Instantiate reelPrefab| Reels["SlotReelModule Column Array<br/>[Reel 0, Reel 1, Reel 2, Reel 3, Reel 4]"]
        Table -->|Symbol Allocation & Pooling| Pool[SlotSymbolManager]
    end

    subgraph Spin & Near-Win Coordination
        Table -->|node.emit: SETUP_NEARWIN| NearWin[SlotTableNearWinModule]
        Table -->|node.emit: REEL_STOP_SOUND| Audio[SlotTableSoundEffectModule]
        Reels -->|onReelStop callback| Table
        Table -->|All Reels Stopped| Resolve[Resolve Promise<void> to Director]
    end
```

---

## 2. Core Responsibilities

1. **Dynamic Reel Grid Instantiation (`initTable`)**: Computes centering offsets (`START_X`) based on `TOTAL_COLS` and `SYMBOL_WIDTH`, instantiating `SlotReelModule` child columns.
2. **Spin Execution & Mode Delegation (`startSpin`)**: Queries `gameSettings.isTurboActive` to select `NORMAL` vs `TURBO` easing configs and starts all column reels.
3. **Matrix Result Ingestion & Sequential Stopping (`stopSpin`)**: Ingests the server's 2D symbol matrix (`string[][]`), delegates column data to `reelComponent.showResult()`, and returns a single `Promise<void>` that resolves when `reelCount >= reels.length`.
4. **Fast-Stop Acceleration (`fastStop`)**: Shortens deceleration bounce curves across all spinning reels when the player taps the screen.
5. **State Tracking**: Manages `TableSpinState` transitions (`READY`, `START`, `SHOWING_RESULT`, `STOPPING_IMMEDIATELY`, `STOPPED`).
