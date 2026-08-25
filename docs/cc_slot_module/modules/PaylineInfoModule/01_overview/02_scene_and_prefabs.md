---
id: "cc_slot_module:PaylineInfoModule:overview:scene_and_prefabs"
title: "PaylineInfoModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ PaylineInfoModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        ├── NormalPaylineInfo [Component: PaylineInfoModule] (Active in Normal Game)
        │   ├── BG [Component: cc.Sprite]
        │   └── layout [Component: cc.Layout]
        │       ├── lbLeft [Component: cc.Label] (Line number / symbol count)
        │       ├── sprSymbol [Component: cc.Sprite] (Winning symbol mini icon)
        │       └── lbRight [Component: cc.Label] (Calculated payout string)
        └── FreePaylineInfo [Component: PaylineInfoModule] (Active in Free Spins)
            ├── BG [Component: cc.Sprite]
            └── layout [Component: cc.Layout]
                ├── lbLeft [Component: cc.Label]
                ├── sprSymbol [Component: cc.Sprite]
                └── lbRight [Component: cc.Label]
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `NormalPaylineInfo` | `5bd6fb1a-84f1-43ef-a425-8a384fd8c69d` | `assets/cc-common/cc-slot-module/GUI/PaylineInfo/NormalPaylineInfo.prefab` | Normal game win payline notification strip container. |
| `FreePaylineInfo` | `ddc179a8-57e8-4d2f-a215-e7a97562cceb` | `assets/cc-common/cc-slot-module/GUI/PaylineInfo/FreePaylineInfo.prefab` | Free spins win payline notification strip container. |

---

## 3. Companion Subsystems & Node Bindings

1. **`MoneyFormatter`**: Injected helper formatting numeric values into currency strings.
2. **`SlotTablePaylineModule`**: Emits win line sequences triggering sequential display cycles on `PaylineInfoModule`.
3. **`GameModeDirectorModule`**: Clears payline info upon spin initiation.
