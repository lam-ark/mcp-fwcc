---
id: "cc_slot_module:IntroGameModule:overview:lifecycle_flowchart"
title: "IntroGameModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 IntroGameModule Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Logic as GameLogic / Network
    participant IGM as IntroGameModule
    participant EventMgr as GameEventManager
    participant Storage as sys.localStorage

    Logic->>IGM: emit("JOIN_GAME_SUCCESS", { joinGameData })
    IGM->>Storage: Read "HideIntroGame"
    
    alt Is Reconnect OR Promotion OR Cached Hide
        IGM->>EventMgr: emit("SKIP_INTRO_GAME")
        IGM->>IGM: active = false
    else Normal Entry
        IGM->>IGM: showButtonJoinGame(true)
        Note over IGM: Awaiting Player Tap
        Player->>IGM: onClickJoinGame()
        IGM->>Storage: Save preference if checked
        IGM->>EventMgr: emit("ON_CLICK_JOIN_GAME")
        IGM->>IGM: fadeOut(0.2s)
        IGM->>EventMgr: emit("HIDE_INTRO_GAME", false)
        IGM->>IGM: active = false
    end
```
