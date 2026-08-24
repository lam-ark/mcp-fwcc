---
id: "cc_slot_module:CascadeModuleData:overview:lifecycle_flowchart"
title: "CascadeModuleData Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 CascadeModuleData Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Store as GameDataStore
    participant CMD as CascadeModuleData
    participant Config as CascadeModuleConfig
    participant VCM as VerticalCascadeModule

    Store->>CMD: updateDataModules(packet) [populates matrix & traceWay]
    VCM->>CMD: formatData()
    CMD->>Config: Read CASCADE_TABLE_CONFIG.format
    CMD->>CMD: getMatrix() (convertSlotMatrix)
    CMD->>CMD: getTraceWay() (sort traceWay indices)
    CMD->>CMD: Map DROP_SYMBOL_CODE ('-1') into matching cells
    CMD-->>VCM: { verticalMatrix, listTraceWayVertical }
```
