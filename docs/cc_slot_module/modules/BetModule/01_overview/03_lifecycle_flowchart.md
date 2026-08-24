---
id: "cc_slot_module:BetModule:overview:lifecycle_flowchart"
title: "BetModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 BetModule Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Engine as Cocos Creator
    participant BM as BetModule
    participant Model as eno.BetData
    participant GL as GameLogic

    Engine->>BM: start()
    BM->>BM: disableBet() -> Disables buttons initially
    BM->>Model: setupObserver() on totalBet, betDenom, min/maxEnable
    
    Model-->>BM: onUpdateTotalBet(2500)
    BM->>BM: totalBetLabel.emit("ON_UPDATE_VALUE", 2500)
    
    Note over BM: Player Clicks Increase Bet
    BM->>BM: onIncreaseBet()
    BM->>BM: playSfxIncreaseBet()
    BM->>GL: emit(INCREASE_BET)
    GL-->>Model: Updates state -> Observers fire
```
