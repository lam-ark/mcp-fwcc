---
id: "cc_slot_module:FreeGameWriterModule:overview:scene_and_prefabs"
title: "FreeGameWriterModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ FreeGameWriterModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `FreeGameWriterModule` is co-located with `FreeGameDirectorModule` on `FreeGamePrefab`:

```text
Canvas/Director/GameMode/FreeGamePrefab [Node]
├── FreeGameDirectorModule
└── FreeGameWriterModule (Script Generator Component)
```

---

## 2. Free Game Script Queue Generation

Generates sequential scripts for Free Spins, handling multiplier increases, sticky wilds, and scatter re-triggers before triggering win evaluations.
