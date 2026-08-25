---
id: "cc_slot_module:TurboModeSuggestionPopup:overview:architecture_and_role"
title: "TurboModeSuggestionPopup Architecture & Role"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "overview", "architecture", "turbo_suggestion", "portrait"]
---

# 🏛️ TurboModeSuggestionPopup Architecture & Role

`TurboModeSuggestionPopup` is the intelligent player retention modal in the `cc-common` Slot Framework SDK. Mounted under `Canvas/Director/Popup/TurboSuggestion`, it prompts players to activate Turbo / Fast-Play mode after consecutive standard spins, automatically localizing suggestion dialogue and routing confirmation events.

---

## 1. Architectural Role

- **Smart Retention Prompt**: Dispatches `CHECK_TURBO_MODE_SUGGESTION_POPUP` on load and observes `UIManagerData.canShowTurboIntro`.
- **User Preference Activation**: Emits `ON_ACTIVE_FROM_TURBO_INTRO` upon confirmation to activate Turbo Mode.
- **Suppression State**: Invokes `uiManagerData.setCanShowTurboIntro(false)` to prevent repetitive dialog displays during the same session.

---

## 2. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BaseUIPopup
    BaseUIPopup <|-- TurboModeSuggestionPopup

    class TurboModeSuggestionPopup {
        +message: cc.Label
        +dataStore: GameDataStore
        +gameConfig: GameConfig
        +uiManagerData: eno.UIManagerData
        +onLoadExtend()
        +setupObserver()
        +showTurboIntro(canShow)
        +onConfirm()
        +onCancel()
        +onDestroy()
    }
```
