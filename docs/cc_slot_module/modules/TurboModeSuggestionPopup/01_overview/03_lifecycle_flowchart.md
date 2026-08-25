---
id: "cc_slot_module:TurboModeSuggestionPopup:overview:lifecycle_flowchart"
title: "TurboModeSuggestionPopup Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 TurboModeSuggestionPopup Lifecycle Flowchart

---

## 1. Turbo Suggestion Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Logic as GameLogic
    participant Data as UIManagerData
    participant Modal as TurboModeSuggestionPopup
    actor Player

    Logic->>Data: canShowTurboIntro = true (e.g. after 10 slow spins)
    Data-->>Modal: observer -> showTurboIntro(true)
    Modal->>Modal: node.active = true
    Player->>Modal: Clicks "Enable Turbo"
    Modal->>Data: setCanShowTurboIntro(false)
    Modal->>Logic: emit(ON_ACTIVE_FROM_TURBO_INTRO)
    Modal->>Modal: node.active = false
```
