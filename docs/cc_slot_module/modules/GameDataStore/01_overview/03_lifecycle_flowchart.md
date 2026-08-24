---
id: "cc_slot_module:GameDataStore:overview:lifecycle_flowchart"
title: "GameDataStore State Ingestion & Distribution Flowchart"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 GameDataStore State Ingestion & Distribution Flowchart

## 1. Complete State Distribution Flowchart

```mermaid
graph TD
    WS([WebSocket Message Arrives]) --> Parse[Director: onStateUpdate data]
    Parse --> GDSParse[GameDataStore.parseDataPS data]
    
    GDSParse --> MapHook{Game-specific mapDataPS?}
    MapHook -->|Yes| MapKeys[mapNewKeys: translate short keys to full keys]
    MapHook -->|No| StorePS[Assign this.playSession = data]
    MapKeys --> StorePS
    
    StorePS --> UpdateModules[GameDataStore.updateDataModules]
    UpdateModules --> Convert[convertData: Populate _dataMap]
    Convert --> CacheMode[gameModeData.set currentGameMode, playSession]
    
    CacheMode --> LoopModules[Iterate each module in _dataModules]
    LoopModules --> LoopKeys[Iterate each key in module.registeredKeys]
    
    LoopKeys --> HasKey{_dataMap.has key?}
    HasKey -->|Yes| Clone[Deep Clone JSON.parse JSON.stringify value]
    HasKey -->|No| Clear[module.clearDataWithKey key]
    
    Clone --> PushData[module.onDataUpdate key, value]
    Clear --> NextKey[Next key]
    PushData --> NextKey
    NextKey --> NextModule[Next module]
```
