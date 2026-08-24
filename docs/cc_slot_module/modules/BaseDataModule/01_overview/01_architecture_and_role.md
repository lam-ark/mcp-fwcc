---
id: "cc_slot_module:BaseDataModule:overview:architecture_and_role"
title: "BaseDataModule Reactive State Binding & Data Distribution Bedrock"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "overview", "architecture", "data_store", "reactive_binding"]
---

# 🏛️ BaseDataModule Reactive State Binding & Data Distribution Bedrock

## 1. Executive Summary & Purpose

`BaseDataModule` (`assets/cc-common/cc-slot-module/Core/BaseDataModule.ts`) is the **Foundational Data Layer Base Class** in the `cc-common` Slot SDK.

Extending `cc.Component`, it serves as the reactive bridge between the global central session store (`GameDataStore`) and local UI presentation components (`SlotBaseModule`). By declaring an array of tracked property keys (`registeredKeys`), every subclass (`SlotTableData`, `SlotTablePaylineData`, `WinAmountData`, `CascadeModuleData`, `ClusterModuleData`) automatically receives state slice updates via `onDataUpdate(key, value)` whenever the server payload changes, without requiring manual event dispatching.

```mermaid
graph TD
    Server[Backend Server Response] --> DataStore[GameDataStore: parseDataPS]
    DataStore -->|updateDataModules / updateModuleWithKeys| Registry[Registered Data Modules]
    
    subgraph Reactive Subscriptions via registeredKeys
        Registry -->|registeredKeys: ['matrix']| TableData[SlotTableData]
        Registry -->|registeredKeys: ['payLines', 'winAmount']| PaylineData[SlotTablePaylineData]
        Registry -->|registeredKeys: ['cascadeMatrix', 'step']| CascadeData[CascadeModuleData]
        Registry -->|registeredKeys: ['clusters']| ClusterData[ClusterModuleData]
    end

    TableData -->|onDataUpdate| TableUI[SlotTableModule]
    PaylineData -->|onDataUpdate| PaylineUI[SlotTablePaylineModule]
```

---

## 2. Core Responsibilities

1. **Auto-Registration with GameDataStore (`start`)**: Subscribes itself to `this.dataStore.registerModule(this)`, enrolling its `registeredKeys` in the central state distribution cycle.
2. **IoC Dependency Injection (`onLoad`)**: Binds `this.baseMode = this.getComponent(SlotBaseModule)` and resolves scoped dependencies via `applyInjections(this, gameId)`.
3. **Key-Based State Ingestion (`onDataUpdate`, `getData`)**: Ingests new values for registered keys and assigns them directly to instance properties (`this[key] = value`).
4. **State Cleanup (`clearData`, `clearDataWithKey`)**: Flushes stored slice data between rounds.
5. **Mode Classification (`isFreeMode`)**: Evaluates `this.gameMode` against `FREE_GAME`, `FREE_GAME_1..4` to adapt data parsing for bonus modes.
