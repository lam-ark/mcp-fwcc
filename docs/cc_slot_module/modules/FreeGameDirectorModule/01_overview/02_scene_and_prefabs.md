---
id: "cc_slot_module:FreeGameDirectorModule:overview:scene_and_prefabs"
title: "FreeGameDirectorModule Scene Placement & Node References"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "overview", "scene", "prefabs", "SpinTimes"]
---

# 🌳 FreeGameDirectorModule Scene Placement & Node References

## 1. Scene Graph Hierarchy

Mounted on the `FreeGame` container node under `Canvas/Director/GameMode`:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── FreeGame ➔ [Mounted: FreeGameDirectorModule, FreeGameWriterModule]
            ├── BG_FreeG (Sprite / Spine Background)
            ├── BoardFree (SlotTableModule, SlotTablePaylineData)
            └── SpinTimesHUD (SpinTimesModule - countdown counter)
```

---

## 2. Inspector Properties & Connected Bridges

| Property / Component | Target Type | Role |
| :--- | :--- | :--- |
| **`gameMode`** | `GAME_MODE_ENUM` | Set to `FREE_GAME` (`2`). |
| **`moduleList`** | `cc.Node[]` | Contains `BoardFree`, `PaylineModule`, `MultiplierModule`. |
| **`spinTimes`** | `cc.Node` | Bound dynamically via `GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES`. |
