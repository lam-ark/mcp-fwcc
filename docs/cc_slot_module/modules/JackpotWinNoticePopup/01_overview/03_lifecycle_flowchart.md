---
id: "cc_slot_module:JackpotWinNoticePopup:overview:lifecycle_flowchart"
title: "JackpotWinNoticePopup Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 JackpotWinNoticePopup Lifecycle Flowchart

---

## 1. Queue & Presentation Flow

```mermaid
sequenceDiagram
    autonumber
    participant Server as Game Server (Socket)
    participant Data as JackpotData
    participant Banner as JackpotWinNoticePopup

    Server->>Data: Broadcast jackpot win packet
    Data-->>Banner: observer -> showWinNotice({ jpInfo })
    Banner->>Banner: Filter out local user
    Banner->>Banner: Push into _listWinJP queue
    Banner->>Banner: showCurrentWinner() -> fadeIn(fadeTime)
    Banner->>Banner: showInfo() -> Formats user and amount
    Banner->>Banner: delay(delayTime: 4s)
    Banner->>Banner: hideCurrentWinner() -> fadeOut(fadeTime)
    Banner->>Banner: scheduleOnce(showCurrentWinner, delayNextWinner: 2s)
```
