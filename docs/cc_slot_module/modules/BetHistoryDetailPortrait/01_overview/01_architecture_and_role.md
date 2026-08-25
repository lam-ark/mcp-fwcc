---
id: "cc_slot_module:BetHistoryDetailPortrait:overview:architecture_and_role"
title: "BetHistoryDetailPortrait Architecture & Role"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "overview", "architecture", "respin_history", "portrait"]
---

# 🏛️ BetHistoryDetailPortrait Architecture & Role

`BetHistoryDetailPortrait` is the portrait-specific spin round replay controller in the `cc-common` Slot Framework SDK. Inheriting from `BetHistoryDetailModule`, it specializes in Respin / Cascade waterfalls with dedicated `prevRespinBtn` and `nextRespinBtn` navigation buttons, custom respin data observers, and compact mobile layouts.

---

## 1. Architectural Role

- **Subclass of `BetHistoryDetailModule`**: Hides standard desktop ScrollView tabs in favor of compact left/right respin stepper buttons.
- **Respin State Observers**: Observes `isEnableNextRespin`, `isEnablePrevRespin`, `isActiveNextRespin`, and `isActivePrevRespin`.
- **Specialized History Payload**: Requests `eno.BET_DEFAULT_HISTORY_TYPE.RESPIN_PORTAIT` payload from `GameLogicUIEvents.INIT_BET_DETAIL`.

---

## 2. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BetHistoryDetailModule
    BetHistoryDetailModule <|-- BetHistoryDetailPortrait

    class BetHistoryDetailModule {
        +initDetailView(data)
        +setupObserver()
        +updateGameModeInfo(data)
    }

    class BetHistoryDetailPortrait {
        +hasRespin: boolean
        +prevRespinBtn: cc.Button
        +nextRespinBtn: cc.Button
        +initDetailView(data)
        +setupObserver()
        +onPreviousRespinBtnClick()
        +onNextRespinBtnClick()
        +resetGameModeRespin()
        +updateGameModeInfo(data)
    }
```
