---
id: "cc_slot_module:PortraitBetModule:overview:lifecycle_flowchart"
title: "PortraitBetModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 PortraitBetModule Lifecycle Flowchart

---

## 1. Bet Boundary Flow

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant HUD as PortraitBetModule
    participant Data as BetData
    participant Toast as ToastInfoModule

    Player->>HUD: Taps Max Bet Shortcut
    HUD->>Toast: emit(HIT_MAX_BET)
    Data-->>HUD: observer -> onMaxBetEnable(true)
    HUD->>HUD: maxBetBtn.node.active = false (Hidden at max bound)
```
