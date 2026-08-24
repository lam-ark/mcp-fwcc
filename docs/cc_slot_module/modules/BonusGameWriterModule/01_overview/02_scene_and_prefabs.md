---
id: "cc_slot_module:BonusGameWriterModule:overview:scene_and_prefabs"
title: "BonusGameWriterModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ BonusGameWriterModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `BonusGameWriterModule` is co-located with `BonusGameDirectorModule` on `BonusGamePrefab`:

```text
Canvas/Director/GameMode/BonusGamePrefab [Node]
├── BonusGameDirectorModule
└── BonusGameWriterModule (Script Generator Component)
```

---

## 2. Bonus Script Steps

Generates steps for bonus round start, item click animation, prize revealing, and total bonus win summary.
