---
id: "cc_slot_module:InfoPanel:overview:lifecycle_flowchart"
title: "InfoPanel Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 InfoPanel Lifecycle Flowchart

---

## 1. Rulebook Page Turning Flow

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant UI as InfoButton
    participant Logic as GameLogic
    participant Panel as InfoPanel
    participant PV as cc.PageView

    Player->>UI: Clicks "Info" Button
    UI->>Logic: emit(OPEN_INFO_PANEL)
    Logic-->>Panel: observer -> showInfoPanel(true)
    Panel->>Panel: resetInfo() -> scrollToPage(0, 0)
    Panel->>Panel: activeButtons(0) -> preBtn disabled, nextBtn enabled

    Player->>Panel: Clicks Next Button
    Panel->>PV: scrollToPage(curInfoID + 1, 0)
    Panel->>Panel: activeButtons(1) -> updates infoTitle.spriteFrame
```
