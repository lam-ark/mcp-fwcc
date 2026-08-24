---
id: "cc_slot_module:BonusGameDirectorModule:overview:scene_and_prefabs"
title: "BonusGameDirectorModule Scene Structure & Inspector Bindings"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌳 BonusGameDirectorModule Scene Structure & Inspector Bindings

## 1. Scene Graph Hierarchy

Mounted on the `BonusGame` container node under `Canvas/Director/GameMode`:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── BonusGame ➔ [Mounted: BonusGameDirectorModule, BonusGameWriterModule]
            ├── BG_Bonus (Background Art)
            ├── ChestGrid (Interactive Item Nodes listening to CLICK_ITEM)
            └── LabelCountDown (cc.Label - 15s timer)
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`labelCountDown`** | `cc.Label` | `null` | Label node displaying auto-pick countdown timer (e.g. "Auto pick in: 14s"). |
| **`defaultCountDown`** | `number` | `15` | Default duration (in seconds) before auto-selection triggers. |
| **`gameMode`** | `GAME_MODE_ENUM` | `BONUS_GAME` (`4`) | Mode identifier enum. |
| **`moduleList`** | `cc.Node[]` | `[]` | Array of child chest/item manager components. |
