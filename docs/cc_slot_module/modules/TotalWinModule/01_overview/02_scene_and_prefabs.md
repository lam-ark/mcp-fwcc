---
id: "cc_slot_module:TotalWinModule:overview:scene_and_prefabs"
title: "TotalWinModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "cutscenes"]
---

# 🏛️ TotalWinModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── CutsceneControl [Component: CutsceneController]
        └── TotalWin [Component: TotalWinModule]
            ├── Overlay [Components: cc.Sprite, cc.Button] (Modal backdrop & tap detector)
            ├── coinParticle [Components: cc.ParticleSystem, cc.Animation] (Coin shower VFX)
            ├── Winamount [Component: cc.Label] (Formatted total win numeric text)
            ├── Label [Component: cc.Label] (Total win subtitle)
            └── title [Component: cc.Sprite] (Feature celebration title graphic)
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `TotalWin` (Core) | `fdff1716-570b-4008-bf57-8cf6677b8544` | `assets/cc-common/cc-slot-module/CutScene/TotalWin/TotalWin.prefab` | Core Free spins summary total win celebration modal prefab. |
| `TotalWin` (Theme Release) | `1db42c52-3911-4ffa-bdd9-29fb4b70aafc` | `assets/cc-release-slot/redcliff-mcp/data/prefabs/Cutscene/TotalWin.prefab` | Theme-customized total win summary celebration modal prefab. |
| `CoinsEffect` | `c43ddcb0-81fa-4549-95ea-79ab671dc76e` | `assets/cc-common/cc-slot-module/CutScene/CoinsEffect/CoinsEffect.prefab` | Reusable coin particle fountain VFX. |

---

## 3. Companion Subsystems & Node Bindings

1. **`CutsceneController`**: Mounts and displays `TotalWinModule` at the conclusion of Free Game mode (`CUTSCENE_TYPE_ENUM.TOTAL_WIN`).
2. **`FreeGameDirectorModule`**: Emits the accumulated free spins win total payload prior to transitioning back to Normal Game mode.
3. **`MoneyTween` & `MoneyFormatter`**: Handles numeric roll-up and localized currency presentation.
