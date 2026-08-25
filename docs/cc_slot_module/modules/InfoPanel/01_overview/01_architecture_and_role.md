---
id: "cc_slot_module:InfoPanel:overview:architecture_and_role"
title: "InfoPanel Architecture & Role"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "overview", "architecture", "paytable", "rules"]
---

# 🏛️ InfoPanel Architecture & Role

`InfoPanel` is the in-game paytable rulebook and feature explanation modal controller in the `cc-common` Slot Framework SDK. Inheriting from `BaseUIPopup`, it supports multi-page horizontal navigation via `cc.PageView` (Landscape mode) or vertical scrolling via `cc.ScrollView` (Portrait mode), dynamic title spriteframe swapping, and boundary navigation button locking.

---

## 1. Architectural Boundaries & System Role

- **Multi-Layout Support**: Handles Landscape games using `pageView: cc.PageView` and Portrait games using `scrollView: cc.ScrollView`.
- **Dynamic Header Swapping**: Changes `infoTitle` spriteFrame dynamically based on `curInfoID` from the `titles` array.
- **PageView Reset Workaround**: Executes an scheduled active toggle (`onResetPageView`) on enable to force Cocos 2.4 PageView geometry recalibration.

---

## 2. Component Hierarchy

Canonical Node Path: `Canvas/Director/Popup/Info`

```text
Canvas/Director/Popup/Info (InfoPanel, FadePopupBehavior)
├── Header
│   ├── InfoTitle (cc.Sprite)
│   └── CloseButton (cc.Button)
├── PageView (cc.PageView - Landscape)
│   └── View/Content (cc.Node)
│       ├── Page_0 (cc.Node - Paylines & Symbol Multipliers)
│       ├── Page_1 (cc.Node - Free Spin Rules)
│       └── Page_2 (cc.Node - Feature Rules)
├── ScrollView (cc.ScrollView - Portrait fallback)
├── NavigationButtons
│   ├── PreBtn (cc.Button)
│   └── NextBtn (cc.Button)
└── PageIndicator (PageViewIndicatorModule)
```

---

## 3. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BaseUIPopup
    BaseUIPopup <|-- InfoPanel

    class InfoPanel {
        +nextBtn: cc.Button
        +preBtn: cc.Button
        +infoTitle: cc.Sprite
        +titles: cc.SpriteFrame[]
        +pageView: cc.PageView
        +scrollView: cc.ScrollView
        +curInfoID: number
        +uiManagerData: any
        +onLoadExtend()
        +setupObserver()
        +showInfoPanel(isActive)
        +pageViewEvent()
        +next()
        +previous()
        +activeButtons(id)
        +resetInfo()
        +onExit()
        +onResetPageView()
        +onDestroy()
    }
```
