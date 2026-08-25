---
id: "cc_slot_module:PayTablePanel:overview:architecture_and_role"
title: "PayTablePanel Architecture & Role"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "overview", "architecture", "paytable", "portrait"]
---

# 🏛️ PayTablePanel Architecture & Role

`PayTablePanel` is the mobile vertical paytable scroll viewer in the `cc-common` Slot Framework SDK. Inheriting from `BaseUIPopup`, it provides a smooth scrollable rulebook and symbol multiplier calculator tailored for portrait aspect ratios.

---

## 1. Architectural Role

- **Vertical Paytable Viewer**: Manages `scrollView: cc.ScrollView` and resets scroll position to the top on every open.
- **Reactive Model Observer**: Observes `UIManagerData.isPayTablePanelOpen` to toggle popup visibility.
- **Modal Lifecycle**: Emits `CLOSE_PAY_TABLE_PANEL` when dismissed.

---

## 2. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- BaseUIPopup
    BaseUIPopup <|-- PayTablePanel

    class PayTablePanel {
        +scrollView: cc.ScrollView
        +uiManagerData: eno.UIManagerData
        +onLoadExtend()
        +setupObserver()
        +showPayTablePanel(isActive)
        +onClosePanel()
        +onDestroy()
    }
```
