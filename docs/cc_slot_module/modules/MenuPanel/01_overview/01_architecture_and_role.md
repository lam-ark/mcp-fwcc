---
id: "cc_slot_module:MenuPanel:overview:architecture_and_role"
title: "MenuPanel Architecture & Role"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "overview", "architecture", "hamburger_menu", "portrait"]
---

# 🏛️ MenuPanel Architecture & Role

`MenuPanel` is the mobile slide-out hamburger navigation drawer in the `cc-common` Slot Framework SDK. Inheriting from `BaseUIPopup`, it provides quick access to BGM/SFX audio toggles, Paytable (`PayTablePanel`), Game Rules (`InfoPanel`), and Bet History (`BetHistoryModule`), with automatic iframe closing and layout adaptation.

---

## 1. Architectural Role

- **Slide-out Navigation Drawer**: Manages navigation icons with `autoHideMenuPanel` support to automatically dismiss when a sub-panel opens.
- **Direct Audio Muting**: Directly toggles BGM and SFX states with instant visual icon swapping (`musicOn`/`musicOff`, `sfxOn`/`sfxOff`).
- **IFrame Environment Support**: Dynamically adjusts `buttonLayout.spacingX` when embedded inside login iframe wrappers.

---

## 2. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BaseUIPopup
    BaseUIPopup <|-- MenuPanel

    class MenuPanel {
        +musicOff: cc.Node
        +musicOn: cc.Node
        +sfxOff: cc.Node
        +sfxOn: cc.Node
        +buttonLayout: cc.Layout
        +spacingX: number
        +autoHideMenuPanel: boolean
        +initialized: boolean
        +onLoadExtend()
        +setupObserver()
        +init()
        +toggleMusic()
        +toggleSFX()
        +onShowPaytable()
        +onShowInfo()
        +onShowBetHistory()
        +onCloseMenuPanel()
        +onDestroy()
    }
```
