---
id: "cc_slot_module:SlotTablePaylineData:director_writer:pipeline_orchestration"
title: "SlotTablePaylineData Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotTablePaylineData Pipeline Orchestration

---

## 1. Data Flow in Script Pipeline

```mermaid
graph LR
    WS[WebSocket Ingestion] -->|Populates playSession| DataStore[GameDataStore]
    DataStore -->|updateDataModules| PData[SlotTablePaylineData]
    Director[GameModeDirectorModule] -->|SETUP_PAYLINES| PM[SlotTablePaylineModule]
    PM -->|Requests converted lines| PData
    PData -->|Returns parsed tracks| PM
```
