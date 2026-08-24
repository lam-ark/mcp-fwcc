---
id: "cc_slot_module:SlotTableNearWinModule:overview:scene_and_prefabs"
title: "SlotTableNearWinModule Scene Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy"]
---

# 🏛️ SlotTableNearWinModule Scene Placement & Prefab Structure

---

## 1. Canonical Hierarchy Placement

`SlotTableNearWinModule` resides on the Table container node alongside `SlotTableModule` and `TableModuleConfig`:

```text
Canvas
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── BoardG
            └── Table (SlotTableModule, TableModuleConfig, SlotTableNearWinModule)
                ├── Reel_0 .. Reel_N (SlotReelModule)
                └── NearWinOverlay (cc.Node -> nearWinEffect)
                    └── Spine / Animation (sp.Skeleton or cc.Animation)
```

---

## 2. Inspector Property Bindings

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `nearWinEffect` | `cc.Node` | `null` | Container node displaying anticipation visual effects. |
| `useSpine` | `boolean` | `true` | When `true`, controls `sp.Skeleton`; otherwise uses `cc.Animation`. |
| `animationName` | `string` | `"animation"` | Spine animation track name to play on loop. |
| `startAtScatterCount` | `number` | `2` | Minimum Scatters on screen to activate anticipation. |
| `stopAtScatterCount` | `number` | `5` | Scatter count threshold to cease anticipation. |
| `startAtBonusCount` | `number` | `2` | Minimum Bonus symbols to activate anticipation. |
| `stopAtBonusCount` | `number` | `5` | Bonus symbol count threshold. |
| `startAtJackpotCount` | `number` | `4` | Minimum Jackpot symbols to activate anticipation. |
| `stopAtJackpotCount` | `number` | `5` | Jackpot count threshold. |
| `isSkipNearWinTurbo` | `boolean` | `true` | Skips anticipation animations when Turbo mode is active. |
| `soundNearWinId` | `string` | `"NEAR_WIN"` | Sound ID routed to `SlotSoundPlayerModule.playSfx()`. |
