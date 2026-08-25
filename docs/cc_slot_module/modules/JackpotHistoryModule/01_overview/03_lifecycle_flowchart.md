---
id: "cc_slot_module:JackpotHistoryModule:overview:lifecycle_flowchart"
title: "JackpotHistoryModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 JackpotHistoryModule Lifecycle Flowchart

---

## 1. Modal Lifecycle

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Setting as SettingPanel
    participant Logic as GameLogic
    participant Module as JackpotHistoryModule
    participant Data as JackpotHistoryData

    Player->>Setting: Clicks Jackpot History Button
    Setting->>Logic: emit(OPEN_JACKPOT_HISTORY_PANEL)
    Logic->>Data: isShowing = true
    Data-->>Module: observer -> onShowJackpotHistory(true)
    Module->>Module: togglePopup(true)
    Module->>Logic: emit(INIT_JACKPOT_HISTORY, { itemPerPage: 10, jpList: "GRAND-MAJOR" })
    Logic-->>Data: recordData = [...]
    Data-->>Module: onShowRecordView(data)
    Module->>Module: recordView.emit('UPDATE_DATA', originalData, 10)
```
