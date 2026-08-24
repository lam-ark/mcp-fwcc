---
id: "cc_slot_module:BonusGameTableModule:overview:scene_and_prefabs"
title: "BonusGameTableModule Scene Structure & Prefabs"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "overview", "scene", "prefabs", "boxPrefab"]
---

# 🌳 BonusGameTableModule Scene Structure & Prefabs

## 1. Scene Graph Hierarchy

Mounted under `Canvas/Director/GameMode/BonusGame`:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── BonusGame (BonusGameDirectorModule, BonusGameWriterModule)
            └── Table ➔ [Mounted: BonusGameTableModule, BonusTableConfig, BonusTableData]
                ├── (Dynamically instantiates child box nodes using boxPrefab)
                ├── Box_0 (BonusGameItemModule)
                ├── Box_1 (BonusGameItemModule)
                └── Box_N (BonusGameItemModule)
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`boxPrefab`** | `cc.Prefab` | `null` | Item prefab (containing `BonusGameItemModule`, `cc.Button`, and `cc.Sprite`). |
| **`openAllBoxDelay`** | `number` | `3` | Delay (in seconds) during end-of-round reveal before closing bonus mode. |
