---
id: "cc_slot_module:BetSelectionPanel:overview:architecture_and_role"
title: "BetSelectionPanel Architecture & Role"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "overview", "architecture", "betting", "scrollview"]
---

# 🏛️ BetSelectionPanel Architecture & Role

`BetSelectionPanel` is the dual-wheel interactive bet selector modal in the `cc-common` Slot Framework SDK. Inheriting from `BaseUIPopup`, it features synchronized twin ScrollViews—one for Bet Denominations (`scrollViewDenom`) and one for Total Bet amounts (`scrollViewTotal`)—with top/bottom buffer padding, snap-to-closest item physics, mouse wheel support, and animated selection tweens.

---

## 1. Architectural Role

- **Dual Synchronized ScrollViews**: Keeps `scrollViewDenom` and `scrollViewTotal` in lockstep when scrolling or clicking either column.
- **Snap-to-Grid Math**: Calculates `findClosestItemIndex` and `calculateOffsetY` based on item heights and buffer rows (`bufferTop`, `bufferBot`).
- **Reactive Model Observer**: Watches `BetData` for `totalCredit`, `betLineNumber`, and `mainBets`, and observes `UIManagerData.isBetSelectionPanelOpen`.
- **Ante/Extra Bet Integration**: Formats full composite bet key with `getBetId()` combining `currentBetId` and `extraBetKey`.

---

## 2. Component Hierarchy

Canonical Node Path: `Canvas/Director/Popup/BetSelectionPanel`

```text
BetSelectionPanel (BetSelectionPanel, FadePopupBehavior)
├── Background (cc.Sprite)
├── Header
│   ├── TotalCreditLabel (cc.Label)
│   └── MaxBetBtn (cc.Button)
├── WheelsContainer
│   ├── DenomColumn
│   │   └── ScrollViewDenom (cc.ScrollView)
│   │       └── ScrollContentDenom (cc.Node + cc.Layout)
│   └── TotalColumn
│       └── ScrollViewTotal (cc.ScrollView)
│           └── ScrollContentTotal (cc.Node + cc.Layout)
└── Footer
    ├── ConfirmBtn (cc.Button)
    └── CloseBtn (cc.Button)
```

---

## 3. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BaseUIPopup
    BaseUIPopup <|-- BetSelectionPanel

    class BetSelectionPanel {
        +moneyFormatter: MoneyFormatter
        +betSelectionItem: cc.Prefab
        +scrollViewDenom: cc.ScrollView
        +scrollViewTotal: cc.ScrollView
        +scrollContentDenom: cc.Node
        +scrollContentTotal: cc.Node
        +totalCreditLabel: cc.Label
        +maxBetBtn: cc.Button
        +scrollTime: number
        +bufferTop: number
        +bufferBot: number
        +onLoadExtend()
        +setupObserver()
        +init()
        +selectCurrentBet()
        +onSelectMaxBet()
        +onConfirmBet()
        +scrollItemClick(betId, isDenom)
        +onScrollToBetId(isDenom, offsetY)
        +onBetSelectionPanelOpen(isOpen)
        +onDestroy()
    }
```
