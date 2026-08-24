---
id: "cc_slot_module:GameDirector:overview:scene_and_prefabs"
title: "GameDirector Scene Hierarchy & Root Node Mapping"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "overview", "scene", "prefabs", "gameModes"]
---

# 🌳 GameDirector Scene Hierarchy & Root Node Mapping

## 1. Scene Graph Hierarchy

`GameDirector` is mounted directly on `Canvas/Director`:

```text
Canvas (cc.Canvas)
└── Canvas/Director ➔ [Mounted: GameInit, GameConfig, GameDataStore, GameDirector]
    └── Canvas/Director/GameMode
        ├── NormalGame (rootNode for NORMAL_GAME)
        ├── FreeGame   (rootNode for FREE_GAME)
        └── BonusGame  (rootNode for BONUS_GAME)
```

---

## 2. `gameModes` Inspector Array Configuration

In the Cocos Creator Editor Inspector on `Canvas/Director`, configure `gameModes`:

| Array Element | `type` (Enum) | `rootNode` (cc.Node) |
| :--- | :--- | :--- |
| **Element 0** | `NORMAL_GAME` (`1`) | Drag `Canvas/Director/GameMode/NormalGame` |
| **Element 1** | `FREE_GAME` (`2`) | Drag `Canvas/Director/GameMode/FreeGame` |
| **Element 2** | `BONUS_GAME` (`4`) | Drag `Canvas/Director/GameMode/BonusGame` |
