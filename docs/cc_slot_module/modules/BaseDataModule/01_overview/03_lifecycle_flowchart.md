---
id: "cc_slot_module:BaseDataModule:overview:lifecycle_flowchart"
title: "BaseDataModule State Distribution & Binding Flowchart"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 BaseDataModule State Distribution & Binding Flowchart

## 1. State Binding Lifecycle Flowchart

```mermaid
graph TD
    Load[onLoad: getComponent SlotBaseModule + applyInjections] --> Extend[onloadExtend: Subclass hook]
    Extend --> Start[start: dataStore.registerModule this]
    
    Start --> Registered[isRegistered = true in GameDataStore]
    
    Registered --> Ingest[Server Response: dataStore.parseDataPS data]
    Ingest --> UpdateCycle[dataStore.updateDataModules]
    
    UpdateCycle --> MatchKeys{Key in module.registeredKeys?}
    MatchKeys -->|Yes| FireUpdate[module.onDataUpdate key, value]
    FireUpdate --> StoreLocal[this[key] = value]
    
    StoreLocal --> UIAccess[UI Module reads data via getData or custom getters]
```
