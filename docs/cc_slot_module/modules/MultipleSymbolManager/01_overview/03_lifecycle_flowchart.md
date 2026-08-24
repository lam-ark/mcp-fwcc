---
id: "cc_slot_module:MultipleSymbolManager:overview:lifecycle_flowchart"
title: "MultipleSymbolManager Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 MultipleSymbolManager Lifecycle Flowchart

---

## 1. Lifecycle Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Table as SlotTableModule
    participant MSM as MultipleSymbolManager
    participant Pool as SlotCustomNodePool

    Table->>MSM: init(gameConfig)
    MSM->>MSM: initSymbolPool()
    MSM->>Pool: new SlotCustomNodePool(template, initCount, specialTemplates)
    MSM->>Pool: initSymbolPool() -> pre-warms all sub-pools

    loop During Spin
        Table->>MSM: createSymbol("WILD", size, parent)
        MSM->>Pool: get("WILD")
        Pool-->>MSM: Returns Wild Node
        MSM-->>Table: Returns Node mounted on column
    end
```
