---
id: "cc_slot_module:JackpotHistoryModule:overview:architecture_and_role"
title: "JackpotHistoryModule Architecture & Role"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "overview", "architecture", "jackpot"]
---

# 🏛️ JackpotHistoryModule Architecture & Role

`JackpotHistoryModule` is the dedicated popup controller for displaying recent progressive jackpot winners (Grand, Major, Minor, Mini) in the `cc-common` Slot Framework SDK. Inheriting from `BaseUIPopup`, it provides pagination, error state handling, server payload formatting, and reactive observer bindings to `JackpotHistoryData`.

---

## 1. Architectural Boundaries & System Role

- **Tier Filtering**: Configured with `jpList: "GRAND-MAJOR"` to filter server-side jackpot logs for specific jackpot tiers.
- **Reactive Model Observer**: Watches `JackpotHistoryData` for updates to `recordData`, `isShowing`, `pageIndex`, `isEnableLoading`, and `isEnableNext`/`isEnablePrev`.
- **Row Presentation Delegation**: Broadcasts `UPDATE_DATA` and `CLEAR_DATA` to the child `recordView` node to render individual winner rows.

---

## 2. Component Hierarchy

Canonical Node Path: `Canvas/Director/Popup/JackpotHistory`

```text
Canvas/Director/Popup/JackpotHistory (JackpotHistoryModule, FadePopupBehavior)
├── RecordView (cc.Node - Jackpot winner row list container)
├── Header
│   ├── Title (cc.Label / cc.Sprite)
│   └── CloseButton (cc.Button)
├── PaginationGroup
│   ├── BackBtn (cc.Button)
│   ├── NextBtn (cc.Button)
│   └── PageIndexNode (cc.Node)
│       └── PageIndexLabel (cc.Label)
├── Loading (cc.Node - Spinner)
└── MessageNode (cc.Node)
    └── MessageLabel (cc.Label)
```

---

## 3. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BaseUIPopup
    BaseUIPopup <|-- JackpotHistoryModule

    class JackpotHistoryModule {
        +itemPerPage: number
        +jpList: string
        +recordView: cc.Node
        +nextBtn: cc.Button
        +backBtn: cc.Button
        +backClose: cc.Button
        +loading: cc.Node
        +messageNode: cc.Node
        +messageLabel: cc.Label
        +pageIndexNode: cc.Node
        +pageIndexLabel: cc.Label
        +textPage: cc.Label
        +jackpotHistoryData: eno.JackpotHistoryData
        +onLoadExtend()
        +setupObserver()
        +onShowJackpotHistory(isActive)
        +openPopup()
        +onShowRecordView(data)
        +onNextPage()
        +onPrevPage()
        +onClose()
        +onDestroy()
    }
```
