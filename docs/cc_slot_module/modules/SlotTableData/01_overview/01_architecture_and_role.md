---
id: "cc_slot_module:SlotTableData:overview:architecture_and_role"
title: "SlotTableData Architectural Role & Matrix Conversion"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "overview", "architecture", "data_model", "matrix_conversion"]
---

# 📊 SlotTableData Architectural Role & Matrix Conversion

---

## 1. Architectural Purpose & Role

`SlotTableData` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableData.ts`) is the **Reactive Data Model** companion for `SlotTableModule`.

Extending `BaseDataModule`, it registers tracked state keys (`registeredKeys = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix"]`) to automatically ingest raw server matrix payloads from `GameDataStore`. It transforms flat 1D string arrays into normalized 2D column-major matrices (`string[][]`) based on the table geometry defined in `TableModuleConfig.TABLE_FORMAT`.

```mermaid
graph LR
    Server[Raw Server Payload: 1D flat string array] --> GDS[GameDataStore]
    GDS -->|updateDataModules: registeredKeys| Data[SlotTableData]
    Data -->|getMatrix: SlotUtils.convertSlotMatrix| Matrix[2D Matrix: string col row]
    Matrix --> View[SlotTableModule Visual Controller]
```

---

## 2. Core Responsibilities

1. **Reactive State Ingestion**: Automatically listens to `"matrix0"`, `"matrix"`, `"normalGameMatrix"`, `"freeGameMatrix"` slices from `GameDataStore`.
2. **Matrix Format Transformation (`getMatrix`)**: Uses `eno.SlotUtils.convertSlotMatrix` to shape 1D array into `[col][row]` array matching `TABLE_FORMAT`.
3. **Mode-Specific Matrix Retrieval (`getRawMatrix`, `getRawResumeMatrix`)**: Differentiates between Normal Game and Free Game mode matrices.
4. **Reconnection State Recovery (`getResumeMatrix`)**: Restores and caches the saved matrix state upon browser refresh or network reconnection.
