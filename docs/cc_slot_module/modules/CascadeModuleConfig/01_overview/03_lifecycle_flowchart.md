---
id: "cc_slot_module:CascadeModuleConfig:overview:lifecycle_flowchart"
title: "CascadeModuleConfig Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 CascadeModuleConfig Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant VCM as VerticalCascadeModule
    participant Data as CascadeModuleData
    participant Config as CascadeModuleConfig

    VCM->>Config: getComponent(CascadeModuleConfig)
    Data->>Config: getComponent(CascadeModuleConfig)
    VCM->>Config: Read CASCADE_TABLE_CONFIG & initLayout()
    VCM->>Config: Read SYMBOL_INDEXES (lazy generated via SlotUtils)
    VCM->>Config: Read FALLING_TIME & CASCADING_TIME_COMPLETED
```
