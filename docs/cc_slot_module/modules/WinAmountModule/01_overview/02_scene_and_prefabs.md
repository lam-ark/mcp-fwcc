---
id: "cc_slot_module:WinAmountModule:overview:scene_and_prefabs"
title: "WinAmountModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ WinAmountModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the canonical active template scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        └── WinAmountPrefab [Component: WinAmountModule]
            ├── WinFrameEffect [Component: cc.Sprite / sp.Skeleton, Optional Win Auras]
            └── WinAmountLabel [Component: cc.Label, Formatted Numeric Text]
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `WinAmountPrefab` (Common Core) | `7a4066dc-585b-4c30-8cd2-13bd11db363c` | `assets/cc-common/cc-slot-module/GUI/WinAmount/WinAmountPrefab.prefab` | Core rolling win amount HUD display prefab. |
| `WinAmountPrefab` (Theme Release) | `56191b2c-29b5-4a00-98fc-121ee9045cb6` | `assets/cc-release-slot/cc1-red-cliff/data/prefabs/Gui/WinAmount/WinAmountPrefab.prefab` | Theme-customized win display bar on bottom HUD. |
| `WinEffect` (Celebration Cutscene) | `90e840da-60c5-4e86-b6ed-a475dfe0497a` | `assets/cc-release-slot/redcliff-mcp/data/prefabs/Cutscene/WinEffect.prefab` | Big Win / Mega Win celebratory modal cutscene. |

---

## 3. Companion Subsystems & Node Bindings

1. **`WinAmountLabel` (`cc.Label`)**: Formatted bitmap or dynamic system font label updated during round settlement via `UPDATE_WIN_AMOUNT`.
2. **`UIManagerModule` Parent**: Anchors win display to the bottom control deck.
3. **`GameModeDirectorModule`**: Emits `UPDATE_WIN_AMOUNT`, `SYNC_WIN_AMOUNT`, and `FADE_OUT_NUMBER` to control the display lifecycle.
