---
id: "cc_slot_module:GameDataStore:overview:lifecycle_flowchart"
title: "GameDataStore Data Ingestion & Broadcast Flowchart"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "lifecycle", "flowchart", "parseDataPS", "updateDataModules"]
---

# 🔄 GameDataStore Data Ingestion & Broadcast Flowchart

## 1. Frame 0 Discovery to Spin Cycle Flowchart

```mermaid
graph TD
    Start([Frame 0: onLoad]) --> Scan[getComponentsInChildren BaseDataModule]
    Scan --> Reg[registerModule: Store in _dataModules Set]
    Reg --> Ready[Ready for Spin Events]

    subgraph Ingestion Pipeline (parseDataPS)
        WS[Server Spin Response Received] --> Parse[parseDataPS: Store raw this.playSession]
        Parse --> Map[mapNewKeys: Remap shorthand backend keys]
        Map --> CustomCalc[Optional Subclass Calculations]
    end

    subgraph Broadcast Pipeline (updateDataModules)
        Director[Director calls updateDataModules] --> Conv[convertData: Clear and populate _dataMap]
        Conv --> ModeSave[gameModeData.set currentGameMode, playSession]
        ModeSave --> Loop[Iterate through _dataModules]
        Loop --> KeyCheck{Key exists in _dataMap?}
        KeyCheck -->|Yes| Clone[JSON.parse JSON.stringify value]
        Clone --> CallUpdate[module.onDataUpdate key, value]
        KeyCheck -->|No| Clear[module.clearDataWithKey key]
    end

    CustomCalc --> Director
```
