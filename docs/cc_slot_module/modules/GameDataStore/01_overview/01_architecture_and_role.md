---
id: "cc_slot_module:GameDataStore:overview:architecture_and_role"
title: "GameDataStore Central State Management & Deep-Clone Distribution Architecture"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "architecture", "state_store", "deep_clone"]
---

# 🏛️ GameDataStore Central State Management & Deep-Clone Distribution Architecture

## 1. Executive Summary & Purpose

`GameDataStore` (`assets/cc-common/cc-slot-module/Core/GameDataStore.ts`) is the **Single Source of Truth (SSOT) and Central State Authority** for the entire slot game application.

Attached to the scene root / Director container (`Canvas/Director/GameDataStore`), it receives raw server session responses via WebSocket, performs key mapping / decompression (`mapNewKeys`), calculates win level thresholds (`getWinLevel`), determines Big Win and Jackpot structures (`getBigWinData`, `getJackpotInfo`), and reactively broadcasts state slices to all registered `BaseDataModule` components using **deep-clone immutability isolation** (`JSON.parse(JSON.stringify(value))`).

```mermaid
graph TD
    Server[WebSocket Server Response] --> Director[GameDirector / ModeDirectors]
    Director -->|parseDataPS| GDS[GameDataStore: Single Source of Truth]
    
    GDS -->|mapNewKeys| CleanPS[Sanitized playSession]
    CleanPS -->|convertData| DataMap[_dataMap: Map<string, any>]
    
    DataMap -->|updateDataModules: Deep Clone Broadcast| ModulesSet[_dataModules: Set<BaseDataModule>]
    
    subgraph Reactive Consumers
        ModulesSet -->|onDataUpdate('matrix')| TableData[SlotTableData]
        ModulesSet -->|onDataUpdate('payLines')| PaylineData[SlotTablePaylineData]
        ModulesSet -->|onDataUpdate('freeGameRemain')| FreeData[FreeGameData]
        ModulesSet -->|onDataUpdate('winAmount')| WinData[WinAmountData]
    end

    GDS -->|Query Methods: getWinLevel, getBigWinData| Writers[GameModeWriterModules / Directors]
```

---

## 2. Core Responsibilities

1. **Central Session Ingestion (`parseDataPS`, `mapNewKeys`)**: Stores incoming play session objects and transforms obfuscated short keys (e.g. `cna` ➔ `currentNormalGameWinAmount`) into standardized SDK keys.
2. **Deep-Clone Reactive State Distribution (`updateDataModules`)**: Iterates through registered `BaseDataModule` components and invokes `onDataUpdate(key, deepClonedValue)`. Deep cloning prevents downstream UI tweens or mutations from polluting the central store.
3. **Win Tier & Timing Computation (`getWinLevel`, `getCountMoneyTime`, `getWinLineTime`)**: Evaluates win ratio against total bet (`FloatUtils.div(win, totalBet)`) and computes exact duration curves for number counters and line delays.
4. **Jackpot & Big Win Data Sanitization (`getJackpotInfo`, `getBigWinData`, `isBigWin`)**: Decodes semicolon-delimited Jackpot payloads (e.g. `["9000_4_USD_GRAND;2500000"]`) into structured objects (`{ jackpotType: "GRAND", jackpotValue: 2500000 }`).
5. **Mode-Specific State Caching (`gameModeData: Map<number, any>`)**: Caches session snapshots keyed by `GAME_MODE_ENUM` for mode transitions and resumes.
