---
id: "cc_slot_module:SlotBaseModule:overview:scene_and_prefabs"
title: "SlotBaseModule Scene Hierarchy Placement & Component Role"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ SlotBaseModule Scene Hierarchy Placement & Component Role

---

## 1. Hierarchy Role

`SlotBaseModule` is inherited by components situated throughout the entire Cocos Creator node tree:

```text
Canvas/Director [Component: SlotBaseModule subclass]
├── GameMode [Component: GameModeDirectorModule -> SlotBaseModule]
│   ├── NormalGamePrefab [Component: SlotTableModule -> SlotBaseModule]
│   │   ├── Reel0, Reel1, Reel2 [Component: SlotReelModule -> SlotBaseModule]
│   │   └── PaylineModule [Component: SlotTablePaylineModule -> SlotBaseModule]
│   └── FreeGamePrefab [Component: SlotTableModule -> SlotBaseModule]
├── UIManager [Component: UIManagerModule -> SlotBaseModule]
│   ├── SpinButton [Component: SlotButtonModule -> SlotBaseModule]
│   ├── BetModule [Component: BetModule -> SlotBaseModule]
│   ├── WalletModule [Component: WalletModule -> SlotBaseModule]
│   └── WinAmount [Component: WinAmountModule -> SlotBaseModule]
└── Cutscene [Component: BaseCutscene -> SlotBaseModule]
```
