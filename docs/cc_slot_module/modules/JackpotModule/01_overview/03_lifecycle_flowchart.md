---
id: "cc_slot_module:JackpotModule:overview:lifecycle_flowchart"
title: "JackpotModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 JackpotModule Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Socket as Server Websocket
    participant Model as eno.JackpotData
    participant JM as JackpotModule
    participant JL as JackpotLabel

    Socket->>Model: Pushes new jackpot progressive pools
    Model-->>JM: Observer on jackpots.index fires
    JM->>JM: renderAllJackpot(data, 3.0s)
    JM->>JL: emit("ON_UPDATE_VALUE", poolValue, 3.0s)
    JL->>JL: moneyTween.runNumber(node, 3.0, poolValue)
    
    Note over JM: Cutscene Begins -> PAUSE_JACKPOT
    JM->>Model: setPauseJackpot(true)
    Note over JM: Cutscene Ends -> RESUME_JACKPOT
    JM->>Model: setPauseJackpot(false)
```
