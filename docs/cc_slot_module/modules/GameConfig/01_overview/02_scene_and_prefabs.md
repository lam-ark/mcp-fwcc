---
id: "cc_slot_module:GameConfig:overview:scene_and_prefabs"
title: "GameConfig Scene Node & Companions"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "overview", "scene", "prefabs", "director"]
---

# 🌳 GameConfig Scene Node & Companions

## 1. Canonical Scene Anchor

`GameConfig` is attached to `Canvas/Director` alongside `GameInit` and `GameDataStore`.

```text
Canvas
└── Canvas/Director [GameInit.ts, GameConfig.ts, GameDataStore.ts, GameDirector.ts]
```

---

## 2. Downstream Module Ingestion Map

| Consumer Component | Properties Read from `GameConfig` | Purpose in Consumer |
| :--- | :--- | :--- |
| **`SlotTableModule`** | `TABLE_FORMAT`, `SYMBOL_WIDTH`, `SYMBOL_HEIGHT` | Instantiates reel column nodes and calculates reel matrix dimensions. |
| **`SlotSymbolManager`**| `SYMBOL_CONFIG` | Sorts symbol visual layers by special symbol priority. |
| **`BetModule`** | `DEFAULT_BET`, `TOTAL_BET_CREDIT`, `CURRENCY_CONFIG` | Configures bet multiplier steps and currency symbols. |
| **`PaylineInfoModule`**| `WIN_LEVEL_CONFIG` | Sets count-up sound durations and celebration thresholds. |
| **`GameDataStore`** | Ingests whole `GameConfig` via `setConfig(config)` | Caches configuration for runtime queries across spin sessions. |
