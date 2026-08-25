---
id: "cc_slot_module:AutoSpinPanel:overview:architecture_and_role"
title: "AutoSpinPanel Architecture & Role"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "overview", "architecture", "auto_spin", "portrait"]
---

# 🏛️ AutoSpinPanel Architecture & Role

`AutoSpinPanel` is the bottom-sheet drawer modal for selecting automated spin round counts (e.g. 10, 20, 50, 100, ∞) in portrait slot layouts. Inheriting from `BaseUIPopup`, it instantiates option buttons dynamically via `AutoSpinPanelConfig`, manages option highlight states, and initiates auto-spin execution via `GameLogicUIEvents.START_AUTO_SPIN`.

---

## 1. Architectural Role

- **Dynamic Number Grid**: Instantiates `autoSpinNumberPrefab` nodes into `numberHolder` for each entry in `config.AUTO_SPIN_NUMBERS`.
- **Default Selection Guard**: Highlights the last option (or default limit) on modal opening.
- **Auto Spin Trigger**: Emits `START_AUTO_SPIN` with the chosen round count and automatically dismisses the drawer.

---

## 2. Component Hierarchy

Canonical Node Path: `Canvas/Director/Popup/AutoSpinPanel`

```text
AutoSpinPanel (AutoSpinPanel, FadePopupBehavior)
├── Background (cc.Sprite)
├── Title (cc.Label)
├── NumberHolder (cc.Node - Grid container)
│   ├── AutoSpinNumber_0 (cc.Node - e.g. 10)
│   ├── AutoSpinNumber_1 (cc.Node - e.g. 20)
│   └── AutoSpinNumber_2 (cc.Node - e.g. 50)
├── StartAutoSpinBtn (cc.Button)
└── CloseBtn (cc.Button)
```

---

## 3. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BaseUIPopup
    BaseUIPopup <|-- AutoSpinPanel

    class AutoSpinPanel {
        +numberHolder: cc.Node
        +autoSpinNumberPrefab: cc.Prefab
        +config: AutoSpinPanelConfig
        +currentSelectedIndex: number
        +autoSpinOption: Record
        +uiManagerData: any
        +initialized: boolean
        +onLoadExtend()
        +setupObserver()
        +init()
        +setDefaultSelectedIndex()
        +onSelectAutoSpin(index)
        +onStartAutoSpin()
        +onAutoSpinPanelOpen(isOpen)
        +closePanel()
        +onDestroy()
    }
```
