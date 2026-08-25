---
id: "cc_slot_module:SlotButtonModule:overview:scene_and_prefabs"
title: "SlotButtonModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ SlotButtonModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        ├── NormalSpinButton [Components: SlotButtonNormal, cc.Button]
        │   ├── SpinButtonSprite [Components: cc.Sprite, SlotButtonSprite]
        │   ├── SpinButtonSpine [Component: SlotButtonSpine]
        │   │   ├── SpineBtnSpin [Component: sp.Skeleton] (Spin/Stop/FastStop animations)
        │   │   └── SpineBtnHover [Component: sp.Skeleton] (Mouse hover highlight)
        │   ├── ButtonTouchArea [Component: cc.Node] (Hitbox bounds)
        │   └── Text_Spin [Component: cc.Sprite] (Spin/Hold-to-Auto/Stop typography text)
        └── FreeSpinButton [Components: SlotButtonFree, cc.Button]
            ├── Sprite [Components: cc.Sprite, SlotButtonSprite]
            └── ButtonTouchArea [Component: cc.Node]
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `NormalSpinButton` | `2f2d5206-a45e-41dc-933b-9c5d200e513f` | `assets/cc-common/cc-slot-module/GUI/SpinButton/NormalSpinButton.prefab` | Base game spin button container prefab. |
| `FreeSpinButton` | `d8d1da76-99c4-4bfb-ae1c-bedf301d6f7a` | `assets/cc-common/cc-slot-module/GUI/SpinButton/FreeSpinButton.prefab` | Free spins feature mode spin button container prefab. |
| `SpinButtonSpine` | `08fae8ac-1ec3-4fde-b1f7-9eec507aa267` | `assets/cc-common/cc-slot-module/GUI/SpinButton/SpinButtonSpine.prefab` | Skeletal Spine button animation renderer. |
| `SpinButtonSprite` | `8fe76cff-b043-4a93-bd37-3a7905c4906f` | `assets/cc-common/cc-slot-module/GUI/SpinButton/SpinButtonSprite.prefab` | Bitmap Sprite button animation renderer. |

---

## 3. Companion Subsystems & Node Bindings

1. **`SlotButtonSprite` / `SlotButtonSpine`**: Renderers swapping visuals between Idle, Spinning, FastStop, and Disabled states.
2. **`GameModeDirectorModule`**: Emits `SPIN_BUTTON.SET_UP_BUTTON` to wire button callbacks with the active director instance.
