---
id: "cc_slot_module:GameDataStore:overview:scene_and_prefabs"
title: "GameDataStore Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameDataStore Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `GameDataStore` resides on the `Canvas/Director` node:

```text
Canvas/Director [Node]
├── GameConfig (GameConfig)
├── GameDataStore (GameDataStore)
├── GameInit (GameInit)
└── GameDirector (GameDirector)
```

---

## 2. Downstream Reactive Consumers

`GameDataStore` syncs state across all active mode sub-nodes via `updateDataModules()`:
- `Canvas/Director/GameMode/MainGamePrefab/SlotTableModule` (`SlotTableData`)
- `Canvas/Director/GameMode/MainGamePrefab/SlotTablePaylineModule` (`SlotTablePaylineData`)
- `Canvas/Director/GameMode/BonusGamePrefab/BonusTable` (`BonusTableData`)
- `Canvas/Director/UIManager/Wallet` (`WalletModule`)
- `Canvas/Director/UIManager/Bet` (`BetModule`)
