---
id: "cc_slot_module:TableModuleConfig:overview:lifecycle_flowchart"
title: "TableModuleConfig Index & Speed Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 TableModuleConfig Index & Speed Lifecycle Flowchart

## 1. Index Generation & Speed Selection Lifecycle

```mermaid
graph TD
    Start([Table Subsystem Bootstrapping]) --> ReadFormat[Read TABLE_FORMAT e.g. [3,3,3,3,3]]
    ReadFormat --> QueryIndexes{SYMBOL_INDEXES queried?}
    
    QueryIndexes -->|First Access| GenIndexes[eno.SlotUtils.generateSymbolIndexes: Generate 2D index array]
    QueryIndexes -->|Subsequent Access| CacheIndexes[Return cached _symbolIndexes]
    
    GenIndexes --> CacheIndexes
    CacheIndexes --> Distribute[Distribute to SlotSymbolManager & SlotTablePaylineModule]

    SpinStart[Spin Triggered: startSpin] --> CheckTurbo{gameSettings.isTurboActive?}
    CheckTurbo -->|Yes| UseTurbo[Apply MODES.TURBO config: speed 0.05, stepStop 6]
    CheckTurbo -->|No| UseNormal[Apply MODES.NORMAL config: speed 0.06, stepStop 12]
    
    UseTurbo --> RunReels[SlotReelModule execute spin with selected mode]
    UseNormal --> RunReels
```
