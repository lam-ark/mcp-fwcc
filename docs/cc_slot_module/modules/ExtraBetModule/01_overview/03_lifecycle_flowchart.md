---
id: "cc_slot_module:ExtraBetModule:overview:lifecycle_flowchart"
title: "ExtraBetModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 ExtraBetModule Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Engine as Cocos Creator
    participant EBM as ExtraBetModule
    participant Model as eno.BetData
    participant GL as GameLogic

    Engine->>EBM: start()
    EBM->>EBM: disableExtraBet()
    EBM->>Model: setupObserver() on min/maxExtraBetEnable, totalBet
    
    Note over EBM: Player clicks Increase Ante Bet
    EBM->>EBM: onIncreaseExtraBet()
    EBM->>EBM: playSfxIncreaseExtraBet()
    EBM->>GL: emit(INCREASE_EXTRA_BET)
    GL-->>Model: Updates extraBetValue & totalBet
    Model-->>EBM: onUpdateTotalBet() -> sets extraBetLabel.string
```
