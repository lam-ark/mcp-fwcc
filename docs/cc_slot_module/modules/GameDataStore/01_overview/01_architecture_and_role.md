---
id: "cc_slot_module:GameDataStore:overview:architecture_and_role"
title: "GameDataStore Central State & Auto-Discovery Architecture"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "architecture", "state_management", "playSession", "BaseDataModule"]
---

# 🏛️ GameDataStore Central State & Auto-Discovery Architecture

## 1. Executive Summary & Core Responsibilities

`GameDataStore` (`assets/cc-common/cc-slot-module/Core/GameDataStore.ts`) is the **Reactive State Management Backbone** of the `cc-common` Slot SDK.

Mounted at `Canvas/Director`, `GameDataStore` acts as the single ingestion gateway for backend spin packets via `parseDataPS(data)`, transforms raw server payloads into normalized camelCase dictionaries, and broadcasts immutable data snapshots to all child `BaseDataModule` components across the scene graph.

```mermaid
graph TD
    WS[WebSocket Spin Packet] -->|parseDataPS data| GDS[GameDataStore<br/>Canvas/Director]

    subgraph Internal State Management
        GDS --> PS[playSession: Master Round Payload]
        GDS --> Map[mapNewKeys / convertData: _dataMap]
        GDS --> ModeData[gameModeData: Mode Snapshots]
    end

    subgraph Auto-Discovery & Broadcast (updateDataModules)
        GDS -->|Immutable Deep-Clone| TDM[TableDataModule<br/>matrix, payLines]
        GDS -->|Immutable Deep-Clone| BDM[BetDataModule<br/>totalBet, betId]
        GDS -->|Immutable Deep-Clone| FDM[FreeSpinDataModule<br/>freeGameRemain]
        GDS -->|Immutable Deep-Clone| JDM[JackpotDataModule<br/>jackpot, trialJpl]
    end

    subgraph Downstream Direct Queries
        GDS -->|getWinAmountInfo / getWinLevel| Director[GameDirector & Writers]
        GDS -->|getJackpotInfo| Cutscenes[WinEffectModule]
    end
```

---

## 2. Core Responsibilities

1. **Spin Session Storage (`playSession`)**: Caches current round data (symbol matrices, win lines, total payout, jackpot hits, next game mode).
2. **Reactive Module Synchronization**: Dispatches data updates to all child `BaseDataModule` components matching their `registeredKeys`.
3. **Win Calculation & Threshold Evaluation**: Computes `rate = FloatUtils.div(win, totalBet)` against `GameConfig.WIN_LEVEL_CONFIG.THRESHOLDS` to determine Win Levels 1..4, coin rolling duration, and payline highlight time.
4. **Jackpot Payload Parsing**: Extracts tier strings (e.g. `GRAND`, `MAJOR`, `MINI`) and numeric reward values from socket strings like `['9000_4_GRAND;2500000']`.

## 3. Key Architectural Invariants

1. **Auto-Discovery of Child Observers**: In `onLoad()`, `GameDataStore` automatically scans `this.getComponentsInChildren("BaseDataModule")` and registers them into an internal `Set<BaseDataModule>` without requiring manual Inspector drag-and-drop wiring.
2. **Immutable Snapshot Broadcast**: When `updateDataModules()` fires, complex objects and arrays are deep-cloned via `JSON.parse(JSON.stringify(value))` before passing to child modules. This prevents child components from mutating the master `playSession` reference.
3. **Mathematical Evaluation Centralization**: Payout evaluation logic (`getWinLevel`, `getCountMoneyTime`, `getWinLineTime`, `isBigWin`, `getJackpotInfo`) is centralized inside `GameDataStore`, keeping Directors and Writers strictly focused on timeline orchestration.
