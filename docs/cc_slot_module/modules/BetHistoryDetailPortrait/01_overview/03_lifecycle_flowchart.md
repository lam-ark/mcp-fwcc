---
id: "cc_slot_module:BetHistoryDetailPortrait:overview:lifecycle_flowchart"
title: "BetHistoryDetailPortrait Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 BetHistoryDetailPortrait Lifecycle Flowchart

---

## 1. Respin Replay Flow

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Panel as BetHistoryDetailPortrait
    participant Logic as GameLogic
    participant Data as BetHistoryDetailData

    Panel->>Logic: emit(INIT_BET_DETAIL, data, RESPIN_PORTAIT)
    Logic-->>Data: Ingests respin sequence
    Data-->>Panel: observer -> isActiveNextRespin (true)
    Player->>Panel: Clicks nextRespinBtn
    Panel->>Logic: emit(BET_DETAIL_RESPIN_NEXT_PAGE)
    Logic-->>Data: Updates current step
    Data-->>Panel: Rerenders step matrix snapshot
```
