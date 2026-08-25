---
id: "cc_slot_module:BetHistoryDetailModule:overview:architecture_and_role"
title: "BetHistoryDetailModule Architecture & Role"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "overview", "architecture", "round_replay"]
---

# 🏛️ BetHistoryDetailModule Architecture & Role

`BetHistoryDetailModule` is the granular round replay and step inspector component in the `cc-common` Slot Framework SDK. It inherits from `SlotBaseModule` and renders step-by-step game mode transitions (Normal Spin ➔ Free Spins ➔ Bonus Game picks ➔ Multipliers) with dynamic tab scrolling and pooled tab items.

---

## 1. Architectural Boundaries & System Role

- **Step & Mode Navigation**: Displays horizontal tab buttons (`scrollItem` inside `scrollView`) allowing players to inspect each step of a multi-stage slot round.
- **Dynamic Node Pooling**: Utilizes `cc.NodePool` (`ScrollHistoryPool`) for smooth checkout and recycling of step tab elements.
- **Summary vs Mode View Switching**: Automatically swaps between overall round payout summary (`summaryView`) and mode-specific matrix snapshots (`gameModeView`, `payableView`).
- **Currency & Jackpot Formatting**: Injects `MoneyFormatter` to render compound winnings and jackpot increments with localized currency symbols.

---

## 2. Component Hierarchy & Scene Placement

Canonical Node Path: `Canvas/Director/Popup/BetHistory/DetailView`

```text
DetailView (BetHistoryDetailModule)
├── Header
│   ├── CurrentModeLabel (cc.Label)
│   ├── InfoLabel (cc.Label - Step win & jackpot amount)
│   └── CloseButton (cc.Button)
├── ScrollView (cc.ScrollView - Tab navigation bar)
│   └── View/Content (cc.Node - scrollContent parent)
│       └── ScrollItem_0..N (cc.Node from scrollPool)
├── SummaryView (cc.Node - Full round settlement summary)
├── GameModeView (cc.Node - Matrix symbol grid snapshot)
├── PayableView (cc.Node - Line win breakdown)
├── SessionGroup (cc.Node - Session ID identifier label)
└── NavigationButtons
    ├── BtnPrev (cc.Button)
    └── BtnNext (cc.Button)
```

---

## 3. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BetHistoryDetailModule

    class BetHistoryDetailModule {
        +scrollItem: cc.Prefab
        +scrollView: cc.ScrollView
        +scrollContent: cc.Node
        +summaryView: cc.Node
        +gameModeView: cc.Node
        +btnNext: cc.Button
        +btnPrev: cc.Button
        +closeButton: cc.Button
        +infoLabel: cc.Label
        +payableView: cc.Node
        +currentModeLabel: cc.Label
        +sessionGroup: cc.Node
        +moneyFormatter: MoneyFormatter
        +scrollPool: cc.NodePool
        +usingScrollItem: cc.Node[]
        +onLoadExtend()
        +setupObserver()
        +initDetailView(data)
        +onNextClick()
        +onPrevClick()
        +onBackClick()
        +onScrollClick(index)
        +initScrollItem(scrollData)
        +enableTabHighlight(index)
        +onRenderDataView(data)
        +onDestroy()
    }
```
