---
id: "cc_slot_module:BaseUIPopup:overview:scene_and_prefabs"
title: "BaseUIPopup Prefab Structure & Node Architecture"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ BaseUIPopup Prefab Structure & Node Architecture

---

## 1. Canonical Hierarchy Placement

Mounted under `Canvas/Director/Popup/<PopupPrefab>`:

```text
Canvas/Director/Popup/<ModalNode> [Component: BaseUIPopup subclass, PopupBehavior]
├── BackgroundBlocker [Component: cc.Button, Black Screen Overlay]
├── DialogContainer [Component: cc.Node, Animated Modal Body]
│   ├── Title [Component: cc.Label]
│   ├── ContentContainer [Component: cc.Node]
│   └── CloseButton [Component: cc.Button, Calls closeAllPopups]
```
