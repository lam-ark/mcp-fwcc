---
id: "cc_slot_module:BaseGameDirector:overview:scene_and_prefabs"
title: "BaseGameDirector Scene Anchors & Node Attachments"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "overview", "scene", "prefabs", "hierarchy"]
---

# 🌳 BaseGameDirector Scene Anchors & Node Attachments

## 1. Scene Graph Hierarchy

`BaseGameDirector` subclasses are mounted under the `Canvas/Director` hierarchy:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    ├── GameDirector.ts              ➔ (Root Spin Loop Controller, extends BaseGameDirector)
    │
    └── Canvas/Director/GameMode
        ├── NormalGameDirectorModule ➔ (Mounted on NormalGame node, extends BaseGameDirector)
        ├── FreeGameDirectorModule   ➔ (Mounted on FreeGame node, extends BaseGameDirector)
        └── BonusGameDirectorModule  ➔ (Mounted on BonusGame node, extends BaseGameDirector)
```

---

## 2. Injected Services Hierarchy

| Service Token | Injected Property | Provider Source | Usage in Director |
| :--- | :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | `GameInit` on `Canvas/Director` | Ingests server payloads and reads win amounts / matrices. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | `GameInit` on `Canvas/Director` | Checks speed modes (`isTurboActive`, `isFastToResult`) and mutates `currentGameState`. |
| **`Logger`** | `@inject(Logger) logger` | `GameInit` Container | Stylized console logging for script queues. |
