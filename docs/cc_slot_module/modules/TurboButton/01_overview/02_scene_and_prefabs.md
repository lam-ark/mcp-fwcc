---
id: "cc_slot_module:TurboButton:overview:scene_and_prefabs"
title: "TurboButton Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ TurboButton Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        └── TurboButton [Component: TurboButton]
            └── Display [Component: TurboButtonSwitcher]
                ├── ButtonOff [Components: cc.Sprite, TurboButtonSprite] (Active during standard speed)
                └── ButtonOn  [Components: cc.Sprite, TurboButtonSprite] (Active during turbo fast play)
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `TurboButton` | `8fb8e320-7fc6-4eba-ab7f-2eabe9fb5896` | `assets/cc-common/cc-slot-module/GUI/Turbo/TurboButton.prefab` | Turbo mode switcher control button container prefab. |

---

## 3. Companion Subsystems & Node Bindings

1. **`TurboButtonSwitcher`**: Toggles node visibility and animation states between `ButtonOff` and `ButtonOn`.
2. **`SlotGameSettings`**: Injected configuration updating `gameSettings.isTurbo` state.
3. **`GameModeDirectorModule`**: Reads turbo speed constants to compress spin delays and reel stop timing.
