---
id: "cc_slot_module:DialogMessageModule:overview:lifecycle_flowchart"
title: "DialogMessageModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 DialogMessageModule Lifecycle Flowchart

---

## 1. Network Alert Flow

```mermaid
sequenceDiagram
    autonumber
    participant Net as NetworkTransport / Socket
    participant Logic as GameLogic
    participant Data as DialogData
    participant Dialog as DialogMessageModule
    actor Player

    Net->>Logic: Socket Disconnected / Error 1004
    Logic->>Data: Set active = true, message = "Network Disconnected"
    Data-->>Dialog: observer -> showDialog(true)
    Data-->>Dialog: observer -> updateMessage("Network Disconnected")
    Dialog->>Dialog: eno.setOpacity(255) -> Displays modal

    Player->>Dialog: Clicks OK Button
    Dialog->>Logic: emit(ON_ACTION_OK)
    Logic->>Net: Initiate WebSocket Reconnect
```
