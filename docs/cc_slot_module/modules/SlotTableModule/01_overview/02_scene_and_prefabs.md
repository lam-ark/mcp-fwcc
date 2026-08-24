---
id: "cc_slot_module:SlotTableModule:overview:scene_and_prefabs"
title: "SlotTableModule Scene Hierarchy & Inspector Properties"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌳 SlotTableModule Scene Hierarchy & Inspector Properties

## 1. Scene Graph Hierarchy

Mounted under `Canvas/Director/GameMode/BoardG/Table`:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── NormalGame (or FreeGame)
            └── BoardG
                └── Table ➔ [Mounted: SlotTableModule, TableModuleConfig, SlotTableData, SlotSymbolManager]
                    ├── SlotTableNearWinModule (Anticipation VFX overlays)
                    ├── SlotTableSoundEffectModule (Reel spin/stop audio triggers)
                    └── ReelsContainer (table node)
                        ├── Reel_0 (SlotReelModule - instantiated from reelPrefab)
                        ├── Reel_1 (SlotReelModule)
                        ├── Reel_2 (SlotReelModule)
                        ├── Reel_3 (SlotReelModule)
                        └── Reel_4 (SlotReelModule)
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`table`** | `cc.Node` | `null` | Parent container node that holds all instantiated reel columns. |
| **`reelPrefab`** | `cc.Prefab` | `null` | Column prefab containing `SlotReelModule`, mask component, and symbol slots. |
| **`symbolManager`** | `SlotSymbolManager` | `null` | Symbol recycling and Spine pool manager (auto-fetched via `getComponent` if empty). |
