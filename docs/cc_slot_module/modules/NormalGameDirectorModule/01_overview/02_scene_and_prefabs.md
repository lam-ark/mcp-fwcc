---
id: "cc_slot_module:NormalGameDirectorModule:overview:scene_and_prefabs"
title: "NormalGameDirectorModule Scene Hierarchy & Component Placement"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "overview", "scene", "prefabs", "hierarchy"]
---

# 🌳 NormalGameDirectorModule Scene Hierarchy & Component Placement

## 1. Scene Graph Hierarchy

Mounted on the `NormalGame` container node under `Canvas/Director/GameMode`:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── NormalGame ➔ [Mounted: NormalGameDirectorModule, NormalGameWriterModule]
            ├── BG_MainG (Sprite)
            └── BoardG (SlotTableModule, SlotTablePaylineData)
```

---

## 2. Injected Services Reference

| Service Token | Injected Property | Provider Source | Purpose |
| :--- | :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | `GameInit` | Ingests `playSession` and evaluates paylines. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | `GameInit` | Queries `isAutoSpin` and toggles FTR speed. |
| **`Logger`** | `@inject(Logger) logger` | `GameInit` | Stylized debug logging. |
