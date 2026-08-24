---
id: "cc_slot_module:GameDataStore:properties:runtime_state_variables"
title: "GameDataStore Internal State & Data Structures"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "properties", "runtime_state", "variables", "playSession"]
---

# 💾 GameDataStore Internal State & Data Structures

## 1. State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose & Downstream Readers |
| :--- | :--- | :--- | :--- | :--- |
| **`playSession`** | `any` | `{}` | `parseDataPS(data)` | The active round payload containing matrices, payouts, free spin tokens, and next modes. |
| **`freeSpinTimes`** | `number` | `0` | Updated on free spin responses | Remaining free spins counter. Read by `SpinTimesModule`. |
| **`isTrialMode`** | `boolean` | `false` | Toggled by `TrialModeButton` | Flag distinguishing trial game session from real money wagers. |
| **`gameConfig`** | `GameConfig` | `null` | `setConfig(gameConfig)` | Reference to `GameConfig` for win thresholds and timings. |
| **`currentGameMode`**| `GAME_MODE_ENUM` | `NORMAL_GAME` (`1`) | Mode directors | Active mode identifier (`NORMAL_GAME`, `FREE_GAME`, `BONUS_GAME`). |
| **`gameSpeed`** | `GAME_SPEED_ENUM` | `NORMAL` (`1`) | `setGameSpeed()` | Spin execution speed (`NORMAL`, `TURBO`, `INSTANTLY`). |
| **`_dataMap`** | `Map<string, any>` | `new Map()` | `convertData(data)` | Internal key-value hash table mapping converted server keys to values. |
| **`_dataModules`** | `Set<BaseDataModule>`| `new Set()` | `registerModule()` | Set of child data listener components. |
| **`gameModeData`** | `Map<number, any>` | `new Map()` | `updateDataModules()` | Cache storing historical payload snapshots per game mode. |
