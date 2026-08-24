---
id: "cc_slot_module:SlotButtonModule:overview:scene_and_prefabs"
title: "SlotButtonModule Scene Hierarchy & Renderer Options"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "overview", "scene_prefabs", "spine", "sprite"]
---

# 🏛️ SlotButtonModule Scene Hierarchy & Renderer Options

---

## 1. Complete Node Hierarchy Under `UIManager`

```text
Canvas/Director/UIManager
├── NormalSpinButton [Component: SlotButtonNormal]
│   ├── SpinButtonTouch [cc.Node with BoxCollider / Hit Area]
│   ├── Display [Component: SlotButtonSpine OR SlotButtonSprite]
│   │   ├── SpineBtnSpin [sp.Skeleton: "Spin", "Stop", "Spin_To_Stop"]
│   │   └── SpineHover [sp.Skeleton: "Hover"]
│   └── TextSpin [cc.Sprite: displays textHoldToAuto or textPressToStop]
├── FreeSpinButton [Component: SlotButtonFree]
│   ├── SpinButtonTouch [cc.Node]
│   └── Display [Component: SlotButtonSpine / SlotButtonSprite]
└── LightningSpinButton [Component: SlotButtonLightning]
    ├── SpinButtonTouch [cc.Node]
    └── Display [Component: SlotButtonSpine / SlotButtonSprite]
```
