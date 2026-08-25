---
id: "cc_slot_module:BetSelectionPanel:overview:lifecycle_flowchart"
title: "BetSelectionPanel Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 BetSelectionPanel Lifecycle Flowchart

---

## 1. Bet Selection Interaction Flow

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant UI as PortraitBetModule
    participant Panel as BetSelectionPanel
    participant Logic as GameLogic
    participant Data as BetData

    Player->>UI: Clicks Bet Amount Display
    UI->>Logic: emit(OPEN_BET_SELECTION_PANEL)
    Logic-->>Panel: observer -> onBetSelectionPanelOpen(true)
    Panel->>Panel: init() -> Builds buffer rows and bet items
    Panel->>Panel: selectCurrentBet() -> Scrolls both wheels to active bet key

    Player->>Panel: Drags Total Bet Wheel & releases
    Panel->>Panel: onScrollViewEnd() -> Snaps to closest item index
    Panel->>Panel: Synchronizes Denom wheel offset with tween

    Player->>Panel: Clicks "Confirm"
    Panel->>Logic: emit(UPDATE_BET_ID, fullBetId)
    Logic->>Data: Updates active betKey
    Panel->>Panel: closePanel()
```
