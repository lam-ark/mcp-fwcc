---
id: "cc_slot_module:WinEffectModule:overview:scene_and_prefabs"
title: "WinEffectModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "cutscenes"]
---

# 🏛️ WinEffectModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── CutsceneControl [Component: CutsceneController]
        └── WinEffect [Component: WinEffectModule]
            ├── Overlay [Components: cc.Sprite, cc.Button] (Full-screen touch interceptor)
            ├── Winamount [Component: cc.Label] (Rolling celebratory win text)
            ├── Skeleton [Component: sp.Skeleton] (Big/Mega/Super Win typography Spine)
            └── CoinsEffect [Components: CoinsEffect, cc.ParticleSystem] (Coin fountain emitter)
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `WinEffect` (Core) | `c43ddcb0-81fa-4549-95ea-79ab671dc76e` | `assets/cc-common/cc-slot-module/CutScene/WinEffect/WinEffect.prefab` | Core Big Win celebration modal prefab. |
| `WinEffect` (Theme Release) | `90e840da-60c5-4e86-b6ed-a475dfe0497a` | `assets/cc-release-slot/redcliff-mcp/data/prefabs/Cutscene/WinEffect.prefab` | Custom themed milestone win celebration cutscene modal. |
| `CoinsEffect` | `c43ddcb0-81fa-4549-95ea-79ab671dc76e` | `assets/cc-common/cc-slot-module/CutScene/CoinsEffect/CoinsEffect.prefab` | Physics-driven coin splash and fountain emitter. |

---

## 3. Companion Subsystems & Node Bindings

1. **`CutsceneController`**: Parent orchestrator routing `PLAY_CUTSCENE` events with `CUTSCENE_TYPE_ENUM.BIG_WIN`.
2. **`MoneyTween`**: Inherited tween interpolator stepping milestone values across Big Win ($20\times$), Mega Win ($50\times$), and Super Win ($100\times+$) thresholds.
3. **`sp.Skeleton`**: Spine animation driving dynamic banner typography transformations as the win tier upgrades.
