---
id: "cc_slot_module:SlotButtonModule:overview:scene_and_prefabs"
title: "SlotButtonModule Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ SlotButtonModule Scene Node Hierarchy

---

## 1. Canonical Placement

Mounted under `Canvas/Director/UIManager`:

```text
Canvas/Director/UIManager
├── NormalSpinButton [Component: SlotButtonNormal]
│   ├── Display [Component: SlotButtonSpine / SlotButtonSprite]
│   ├── SpinButtonTouch [cc.Node with Touch Target area]
│   └── TextSpin [cc.Sprite: Hold to Auto / Press to Stop]
└── FreeSpinButton [Component: SlotButtonFree]
    ├── Display [cc.Node]
    └── SpinButtonTouch [cc.Node]
```
