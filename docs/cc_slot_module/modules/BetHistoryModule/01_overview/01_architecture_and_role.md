---
id: "cc_slot_module:BetHistoryModule:overview:architecture_and_role"
title: "BetHistoryModule Architecture & Role"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "overview", "architecture", "popup", "history"]
---

# 🏛️ BetHistoryModule Architecture & Core Role

The `BetHistoryModule` class is the central UI controller for the player's betting history in the Cocos Common (`cc-common`) Slot Framework SDK. It inherits from `BaseUIPopup` and is responsible for managing the top-level session overview list, paging navigation controls, loading overlays, and delegating detailed round replays to the child `BetHistoryDetailModule`.

---

## 1. Architectural Boundaries & System Role

`BetHistoryModule` operates at the boundary between presentation UI and game logic data models:
- **Presentation Layer**: Controls visibility of `recordView` (session list) and `detailView` (step replay).
- **Reactive Model Observer**: Binds to `BetHistoryData` in `gameLogic.getDataModel()` using the reactive `observer` utility to automatically respond to data mutations without manual polling.
- **Stand-Alone vs In-Game Modals**: Dynamically hides the close button (`closeBtn`) when embedded inside an external history scene (`isFromHistoryScene: true`).

---

## 2. Component Hierarchy & Scene Graph Placement

Canonical Node Path: `Canvas/Director/Popup/BetHistory`

```text
Canvas/Director/Popup/BetHistory (BetHistoryModule, FadePopupBehavior)
├── RecordView (cc.Node - Container for BetCellHistory items)
├── DetailView (cc.Node - Container for BetHistoryDetailModule)
├── Header
│   ├── Title (cc.Label / cc.Sprite)
│   └── CloseButton (cc.Button)
├── PaginationGroup
│   ├── BackBtn (cc.Button)
│   ├── NextBtn (cc.Button)
│   └── PageIndexNode (cc.Node)
│       └── PageIndexLabel (cc.Label)
├── Loading (cc.Node - Spinner)
└── MessageNode (cc.Node - Error/Empty alert)
    └── MessageLabel (cc.Label)
```

---

## 3. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BaseUIPopup
    BaseUIPopup <|-- BetHistoryModule

    class BaseUIPopup {
        +popupBehavior: PopupBehavior
        +isClose: boolean
        +currentIsActive: boolean
        +togglePopup(isActive, cb)
        +activePopup(isActive)
        +playSfxClick()
        +closeAllPopups()
    }

    class BetHistoryModule {
        +itemPerPage: number
        +recordView: cc.Node
        +detailView: cc.Node
        +nextBtn: cc.Button
        +backBtn: cc.Button
        +closeBtn: cc.Button
        +loading: cc.Node
        +messageNode: cc.Node
        +messageLabel: cc.Label
        +pageIndexNode: cc.Node
        +pageIndexLabel: cc.Label
        +textPage: cc.Label
        +modelData: any
        +isInit: boolean
        +onLoadExtend()
        +setupObserver()
        +showContent(isActive)
        +showBetHistory(isActive)
        +openPopup()
        +resetBetHistory()
        +showRecordView(isActive)
        +enableNextBtn(isEnableNext)
        +enablePreviousBtn(isEnablePrev)
        +onNextPage()
        +onPrevPage()
        +onClose()
        +openBetDetail(data)
        +hideCloseButton(isFromHistoryScene)
        +onEnableLoading(isActive)
        +onUpdateMessage(value)
        +onRecordDataChange(value)
        +onShowingDetail(isOpen)
        +onShowMessage(isActive)
        +onPageIndexChange(index)
        +onDestroy()
    }
```
