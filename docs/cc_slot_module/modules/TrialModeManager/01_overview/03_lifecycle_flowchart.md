---
id: "cc_slot_module:TrialModeManager:overview:lifecycle_flowchart"
title: "TrialModeManager Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 TrialModeManager Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant GL as GameLogic
    participant TMM as TrialModeManager
    participant Model as eno.TrialModeData
    participant Panel as trialModePanel: cc.Node

    TMM->>TMM: hideTrialModePanel()
    TMM->>GL: emit(INIT_TRIAL_MODE, trialModeData)
    
    Model-->>TMM: isPopupDisplay updates to true
    TMM->>Panel: updateTrialModePanel(true) -> active = true, opacity = 255
    
    Model-->>TMM: tutorialOptions updates [0, 1]
    TMM->>TMM: updateOptions([0, 1]) -> dispatches SET_INTERACTABLE
```
