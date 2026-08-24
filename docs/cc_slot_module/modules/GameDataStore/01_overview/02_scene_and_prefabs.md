---
id: "cc_slot_module:GameDataStore:overview:scene_and_prefabs"
title: "GameDataStore Scene Hierarchy & Child Observers Graph"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "scene", "prefabs", "hierarchy", "BaseDataModule"]
---

# 🌳 GameDataStore Scene Hierarchy & Child Observers Graph

## 1. Canonical Node Placement

`GameDataStore` is attached to the master root node **`Canvas/Director`**:

```text
Canvas (cc.Canvas)
└── Canvas/Director ➔ [Mounted: GameInit, GameConfig, GameDataStore, GameDirector]
    │
    ├── Canvas/Director/GameMode
    │   └── BoardG
    │       └── SlotTableModule ➔ [Mounted: SlotTableData (extends BaseDataModule)]
    │
    ├── Canvas/Director/UIManager
    │   ├── BetModule ➔ [Mounted: BetDataModule (extends BaseDataModule)]
    │   ├── WalletModule ➔ (Reads dataStore.playSession)
    │   └── PaylineInfoModule ➔ (Reads dataStore.getWinAmountInfo)
    │
    └── Canvas/Director/CutsceneControl ➔ (Reads dataStore.getBigWinData, getJackpotInfo)
```

---

## 2. Child Data Modules Ingestion Map

| Child Component | Registered Keys in `BaseDataModule` | Target Data Ingested from `playSession` |
| :--- | :--- | :--- |
| **`SlotTableData`** | `["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix"]` | Active symbol grids across game modes. |
| **`SlotTablePaylineData`** | `["payLines", "normalGamePayLines", "freeGamePayLines", "jackpotPayline"]` | Winning line combinations and coordinate paths. |
| **`CascadeModuleData`** | `["matrix0", "matrix", "traceWay"]` | Cascade elimination paths and falling symbol arrays. |
| **`BonusTableData`** | `["bonusGameMatrix", "bonusValue", "jackpot", "bonusGameRemain"]` | Mini bonus game boards, prize values, and remaining picks. |
