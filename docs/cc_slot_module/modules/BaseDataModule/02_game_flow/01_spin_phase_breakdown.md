---
id: "cc_slot_module:BaseDataModule:game_flow:spin_phase_breakdown"
title: "BaseDataModule Data Distribution Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 BaseDataModule Data Distribution Spin Phase Breakdown

## 1. Sequence Execution

```mermaid
sequenceDiagram
    autonumber
    participant Server as Game Server
    participant DS as GameDataStore
    participant BDM as BaseDataModule Subclass (e.g. SlotTableData)
    participant UI as SlotBaseModule Subclass (e.g. SlotTableModule)

    Server-->>DS: WebSocket SPIN_RESULT payload
    DS->>DS: parseDataPS(data)
    DS->>BDM: onDataUpdate('matrix', [[...]])
    BDM->>BDM: this['matrix'] = value
    
    Note over BDM,UI: UI Layer Ingestion
    UI->>BDM: getMatrix() / getData('matrix')
    BDM-->>UI: Returns latest validated matrix
    UI->>UI: stopSpin(matrix)
```
