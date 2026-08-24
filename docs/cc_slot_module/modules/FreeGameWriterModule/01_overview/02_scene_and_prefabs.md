---
id: "cc_slot_module:FreeGameWriterModule:overview:scene_and_prefabs"
title: "FreeGameWriterModule Scene Placement & Node Tree"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "overview", "scene"]
---

# 🌳 FreeGameWriterModule Scene Placement & Node Tree

## 1. Hierarchy Location

Attached to the Free Game Director node within the scene tree:

```text
Canvas/Director/GameMode/FreeGameDirector
├── FreeGameDirectorModule (Director orchestrator)
└── FreeGameWriterModule (Script generator generating command queues)
```

---

## 2. Prefab Structure & References

* Attached alongside `FreeGameDirectorModule`.
* Injected with `GameDataStore` via IoC to evaluate `freeGameRemain` and `totalWinAmount`.
