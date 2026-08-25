---
id: "cc_slot_module:CutsceneController:overview:scene_and_prefabs"
title: "CutsceneController Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "cutscenes"]
---

# 🏛️ CutsceneController Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── CutsceneControl [Component: CutsceneController]
        ├── IntroFreeGame [Component: IntroFreeGameModule]
        │   ├── Overlay [Components: cc.Sprite, cc.Button]
        │   └── Label [Component: cc.Label]
        ├── JackpotWin [Component: JackpotWinModule]
        │   ├── Overlay [Components: cc.Sprite, cc.Button]
        │   ├── coinParticle [Components: cc.ParticleSystem, cc.Animation]
        │   ├── Winamount [Component: cc.Label]
        │   ├── title [Component: cc.Sprite]
        │   └── Label [Component: cc.Label]
        ├── TotalWin [Component: TotalWinModule]
        │   ├── Overlay [Components: cc.Sprite, cc.Button]
        │   ├── coinParticle [Components: cc.ParticleSystem, cc.Animation]
        │   ├── Winamount [Component: cc.Label]
        │   ├── Label [Component: cc.Label]
        │   └── title [Component: cc.Sprite]
        └── WinEffect [Component: WinEffectModule]
            ├── Overlay [Components: cc.Sprite, cc.Button]
            ├── Winamount [Component: cc.Label]
            ├── Skeleton [Component: sp.Skeleton]
            └── CoinsEffect [Components: CoinsEffect, cc.ParticleSystem]
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `WinEffect` (Core) | `c43ddcb0-81fa-4549-95ea-79ab671dc76e` | `assets/cc-common/cc-slot-module/CutScene/WinEffect/WinEffect.prefab` | Core Big/Mega/Super Win celebration modal. |
| `WinEffect` (Theme) | `90e840da-60c5-4e86-b6ed-a475dfe0497a` | `assets/cc-release-slot/redcliff-mcp/data/prefabs/Cutscene/WinEffect.prefab` | Theme-customized milestone win modal prefab. |
| `JackpotWin` (Core) | `4f4eef9a-27aa-4ebc-bc6d-265ceb53084d` | `assets/cc-common/cc-slot-module/CutScene/JackpotWin/JackpotWin.prefab` | Progressive jackpot celebration modal. |
| `JackpotWin` (Theme) | `742f2f3a-5cbf-4d9e-b371-6e300a6fd6b2` | `assets/cc-release-slot/redcliff-mcp/data/prefabs/Cutscene/JackpotWin.prefab` | Theme-customized jackpot celebration modal. |
| `TotalWin` (Core) | `fdff1716-570b-4008-bf57-8cf6677b8544` | `assets/cc-common/cc-slot-module/CutScene/TotalWin/TotalWin.prefab` | Free spins session total win summary modal. |
| `TotalWin` (Theme) | `1db42c52-3911-4ffa-bdd9-29fb4b70aafc` | `assets/cc-release-slot/redcliff-mcp/data/prefabs/Cutscene/TotalWin.prefab` | Theme-customized total win summary modal. |
| `IntroFreeGame` (Core) | `d819b199-b8ee-429b-9179-395ca78689e8` | `assets/cc-common/cc-slot-module/CutScene/IntroFreeGame/IntroFreeGame.prefab` | Transition intro cutscene modal into Free Spins. |
| `IntroFreeGame` (Theme) | `86138a98-b576-4306-846f-468975d8de54` | `assets/cc-release-slot/redcliff-mcp/data/prefabs/Cutscene/IntroFreeGame.prefab` | Theme-customized intro free spins transition modal. |

---

## 3. Companion Subsystems & Node Bindings

1. **`GameEventManager`**: Receives `PLAY_CUTSCENE` and `CLOSE_CUTSCENE` global events to mount and unmount modal children.
2. **`BaseCutscene`**: Base class inherited by all child modal controllers (`WinEffectModule`, `JackpotWinModule`, `TotalWinModule`, `IntroFreeGameModule`).
3. **`GameModeDirectorModule`**: Emits cutscene trigger payloads during settlement phases.
