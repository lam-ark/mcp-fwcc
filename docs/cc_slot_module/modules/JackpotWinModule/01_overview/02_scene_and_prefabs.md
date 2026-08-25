---
id: "cc_slot_module:JackpotWinModule:overview:scene_and_prefabs"
title: "JackpotWinModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "cutscene"]
---

# 🏛️ JackpotWinModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the canonical active template scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── CutsceneControl [Component: CutsceneController]
        ├── IntroFreeGame [Component: IntroFreeGameModule]
        ├── TotalWin [Component: TotalWinModule]
        ├── WinEffect [Component: WinEffectModule]
        └── JackpotWin [Component: JackpotWinModule]
            ├── Overlay [Components: cc.Sprite, cc.Button] (Modal backdrop & tap detector)
            ├── coinParticle [Components: cc.ParticleSystem, cc.Animation] (Coin shower particle VFX)
            ├── Winamount [Component: cc.Label] (Rolling money text label)
            ├── title [Component: cc.Sprite] (Jackpot tier typography graphic)
            └── Label [Component: cc.Label] (Subtitle / Celebration tag)
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `JackpotWin` (Common Core) | `4f4eef9a-27aa-4ebc-bc6d-265ceb53084d` | `assets/cc-common/cc-slot-module/CutScene/JackpotWin/JackpotWin.prefab` | Core progressive jackpot celebration cutscene prefab. |
| `JackpotWin` (Theme Release) | `742f2f3a-5cbf-4d9e-b371-6e300a6fd6b2` | `assets/cc-release-slot/redcliff-mcp/data/prefabs/Cutscene/JackpotWin.prefab` | Custom themed jackpot celebration cutscene modal prefab. |
| `CoinsEffect` (Particle) | `c43ddcb0-81fa-4549-95ea-79ab671dc76e` | `assets/cc-common/cc-slot-module/CutScene/CoinsEffect/CoinsEffect.prefab` | Reusable coin particle burst and shower emitter. |

---

## 3. Companion Subsystems & Node Bindings

1. **`CutsceneController`**: Parent orchestrator mounting, activating, and routing payload parameters to `JackpotWinModule` upon `PLAY_CUTSCENE` events.
2. **`MoneyTween`**: Attached tween engine interpolating the rolling win amount from 0 to target score.
3. **`MoneyFormatter`**: Utility class formatting the final settled integer amount into localized currency strings.
