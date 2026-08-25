---
id: "cc_slot_module:BetHistoryDetailModule:overview:lifecycle_flowchart"
title: "BetHistoryDetailModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 BetHistoryDetailModule Lifecycle Flowchart

---

## 1. Step Navigation & Replay Flow

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Parent as BetHistoryModule
    participant Detail as BetHistoryDetailModule
    participant Logic as GameLogic
    participant Data as BetHistoryDetailData

    Parent->>Detail: emit("INIT_DETAIL_VIEW", sessionData)
    Detail->>Detail: _reset()
    Detail->>Logic: emit(INIT_BET_DETAIL, sessionData)
    Logic-->>Data: gameModeData = [...]
    Data-->>Detail: observer -> initScrollItem(gameModeData)
    Detail->>Detail: Allocate pooled tab items in ScrollView
    
    Data-->>Detail: observer -> currentData (Step 0)
    Detail->>Detail: onRenderDataView(data)
    Detail->>Detail: gameModeView.emit('RENDER_GAME_MODE_VIEW', data)

    Player->>Detail: Clicks Next Step Tab
    Detail->>Logic: emit(BET_DETAIL_NEXT_PAGE)
    Logic-->>Data: currentIndex = 1
    Data-->>Detail: enableTabHighlight(1) -> auto-scrolls tab bar
    Data-->>Detail: onRenderDataView(step1Data)
```
