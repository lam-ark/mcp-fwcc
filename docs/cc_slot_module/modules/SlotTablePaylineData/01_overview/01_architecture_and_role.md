---
id: "cc_slot_module:SlotTablePaylineData:overview:architecture_and_role"
title: "SlotTablePaylineData Architecture & Role"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "overview", "architecture", "data_layer", "payline_conversion"]
---

# 🏛️ SlotTablePaylineData Architecture & Role

---

## 1. Architectural Purpose

`SlotTablePaylineData` (`assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/SlotTablePaylineData.ts`) is the **Reactive Payline Data Model** in the `cc-common` Slot SDK.

Extending `BaseDataModule`, it observes reactive store keys (`payLines`, `matrix`, `respinGamePayLines`, `jackpotPayline`) and converts raw backend string arrays into structured geometric coordinate tracks consumable by the visual presentation layer (`SlotTablePaylineModule`).

```mermaid
graph TD
    DataStore[GameDataStore] -->|Reactive state sync on registeredKeys| Data[SlotTablePaylineData]
    Config[PaylineConfig] -->|PAYLINE_TYPE & TABLE_CONFIG| Data
    
    subgraph Conversion Pipeline
        Data -->|Lines: convertPayLine| Lines[Lines Mode Algorithm]
        Data -->|AllWays: convertPayLineAllWays| AllWays[243 Ways Algorithm]
        Data -->|Cluster: convertPayLineCluster| Cluster[Cluster Pays Algorithm]
        Data -->|ScatterPay: convertPayLineScatterPay| Scatter[Scatter Pay Algorithm]
    end
    
    Data -->|getPayLines & getWinSymbols| PM[SlotTablePaylineModule]
```

---

## 2. Core Responsibilities

1. **Reactive Key Subscription**: Listens to 15 state keys (`registeredKeys: ['state', 'isResume', 'matrix', 'payLines', 'rightPayLines', ...]`).
2. **Mode-Aware Selection**: Selects normal, free, or respin matrices and paylines depending on `state` and `isResume`.
3. **Multi-System Conversion (`convertPayLine`)**: Translates paylines according to `PAYLINE_TYPE` (Lines, AllWays, Cluster, ScatterPay).
4. **Jackpot Payline Extraction (`getJackpotPayline`)**: Parses backend delimited jackpot payloads (`"ID;WinNumbers;WinAmount"`).
5. **Bidirectional Support (`rightPayLines`)**: Flags and converts Both-Ways / Right-to-Left paylines (`isRight: true`).
