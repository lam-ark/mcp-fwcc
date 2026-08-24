---
id: "cc_slot_module:SlotTablePaylineData:overview:lifecycle_flowchart"
title: "SlotTablePaylineData Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 SlotTablePaylineData Lifecycle Flowchart

---

## 1. Data Ingestion & Conversion Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Server as WebSocket Server
    participant Store as GameDataStore
    participant Data as SlotTablePaylineData
    participant PM as SlotTablePaylineModule

    Server->>Store: Ingests spin packet (matrix, payLines, winAmount)
    Store->>Data: updateDataModules() -> Copies registeredKeys into Data instance
    PM->>Data: getPayLines()
    Data->>Data: convertPayLine(payLines) -> Maps coordinates per PAYLINE_TYPE
    PM->>Data: getWinSymbols()
    Data->>Data: PaylineUtils.getAllWinSymbols(matrix, payLines)
    Data-->>PM: Returns parsed winning lines and symbol coordinates
```
