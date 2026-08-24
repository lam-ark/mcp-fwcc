---
id: "cc_slot_module:PaylineFactory:overview:lifecycle_flowchart"
title: "PaylineFactory Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "overview", "lifecycle", "flowchart", "mermaid"]
---

# 🔄 PaylineFactory Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Scene as Scene Loader
    participant Factory as PaylineFactory
    participant Consumer as Payline Follower Module
    participant Pool as NodePool

    Scene->>Factory: onLoad()
    loop For each PoolItem in poolItems
        Factory->>Factory: Register prefabMap & poolMap
        Factory->>Factory: preloadObjects(name, initCount)
        Factory->>Pool: put(node)
    end

    Note over Factory, Consumer: Win Presentation Runtime
    Consumer->>Factory: getObject("WinFrameGold")
    alt Pool has nodes
        Factory->>Pool: pool.get()
    else Pool empty
        Factory->>Factory: _spawnObject("WinFrameGold")
    end
    Factory-->>Consumer: Active Node

    Note over Factory, Consumer: Round Reset
    Consumer->>Factory: returnObject(node)
    Factory->>Factory: Read node.__prefabName__
    Factory->>Pool: pool.put(node)
```
