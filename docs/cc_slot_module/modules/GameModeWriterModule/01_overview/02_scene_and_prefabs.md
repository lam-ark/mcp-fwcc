---
id: "cc_slot_module:GameModeWriterModule:overview:scene_and_prefabs"
title: "GameModeWriterModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameModeWriterModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), concrete subclasses of `GameModeWriterModule` (`NormalGameWriterModule`, `FreeGameWriterModule`, `BonusGameWriterModule`) are co-located on their respective mode prefabs:

```text
Canvas/Director/GameMode
├── MainGamePrefab (NormalGameDirectorModule, NormalGameWriterModule)
├── FreeGamePrefab (FreeGameDirectorModule, FreeGameWriterModule)
└── BonusGamePrefab (BonusGameDirectorModule, BonusGameWriterModule)
```

---

## 2. Co-Location with Director

Attaching the writer directly alongside its director enables the director to initialize the writer in `onLoad()`:
```typescript
this.writer = this.getComponent(GameModeWriterModule);
```
