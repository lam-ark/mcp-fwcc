---
id: "cc_slot_module:GameConfig:overview:scene_and_prefabs"
title: "GameConfig Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameConfig", "game_config", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameConfig Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `GameConfig` resides on the `Canvas/Director` node:

```text
Canvas/Director [Node]
├── GameConfig (Component: GameConfig)
├── GameDataStore (Component: GameDataStore)
├── GameInit (Component: GameInit)
└── GameDirector (Component: GameDirector)
```

---

## 2. Inspector Properties

| Property | Type | Default | Usage |
| :--- | :--- | :--- | :--- |
| `TABLE_FORMAT` | `number[]` | `[3, 3, 3, 3, 3]` | Default table grid format (columns and row count). |
| `PAY_SYSTEM` | `PAY_SYSTEM_ENUM` | `PAY_SYSTEM_ENUM.ALL_WAY` | Active win evaluation paradigm. |
| `IS_DEBUG` | `boolean` | `false` | Enables runtime verbose logs. |
