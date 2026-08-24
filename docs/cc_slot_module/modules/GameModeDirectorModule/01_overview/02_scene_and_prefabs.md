---
id: "cc_slot_module:GameModeDirectorModule:overview:scene_and_prefabs"
title: "GameModeDirectorModule Scene Node Anchors & moduleList Mapping"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "overview", "scene", "prefabs", "moduleList"]
---

# 🌳 GameModeDirectorModule Scene Node Anchors & moduleList Mapping

## 1. Scene Graph Hierarchy

`GameModeDirectorModule` instances are attached directly to mode container nodes under `Canvas/Director/GameMode`:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    └── Canvas/Director/GameMode
        ├── NormalGame ➔ [Mounted: NormalGameDirectorModule, NormalGameWriterModule]
        │   ├── BG_MainG
        │   └── BoardG (SlotTableModule, SlotTablePaylineData)
        │
        ├── FreeGame ➔ [Mounted: FreeGameDirectorModule, FreeGameWriterModule]
        │   ├── BG_FreeG
        │   └── BoardFree (SlotTableModule, SlotTablePaylineData)
        │
        └── BonusGame ➔ [Mounted: BonusGameDirectorModule, BonusGameWriterModule]
```

---

## 2. Inspector `moduleList` Reference Mapping

In Cocos Creator Editor, drag and drop sibling components into the `moduleList` array on each mode director:

| Target Component Node | Purpose in `moduleList` |
| :--- | :--- |
| **`BoardG` / `Table`** | Receives `TABLE_START_SPIN`, `TABLE_STOP_SPIN`, `TABLE_FAST_STOP`. |
| **`PaylineModule`** | Receives `SHOW_PAYLINES`, `CLEAR_PAYLINES`. |
| **`WinEffectModule`** | Receives `TRIGGER_WIN_EFFECT`, `STOP_WIN_EFFECT`. |
| **`MultiplierModule`** | Receives `UPDATE_MULTIPLIER`, `RESET_MULTIPLIER`. |
