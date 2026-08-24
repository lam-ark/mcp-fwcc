---
id: "cc_slot_module:SlotTableModule:overview:scene_and_prefabs"
title: "SlotTableModule Scene Node Placement & Prefab Wiring"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotTableModule Scene Node Placement & Prefab Wiring

---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotTableModule` sits inside each mode prefab (`MainGamePrefab` / `FreeGamePrefab`) with its complete companion component quad:

```text
MainGamePrefab (or FreeGamePrefab)
└── SlotTableModule [Node with Components]
    ├── [Component 1] SlotTableModule
    ├── [Component 2] TableModuleConfig
    ├── [Component 3] SlotTableData
    ├── [Component 4] SlotTableNearWinModule
    ├── [Component 5] SlotModuleEditorTag
    └── [Children Nodes]:
        ├── SymbolPool (SlotSymbolManager - Main reel symbol pool)
        ├── Table (cc.Mask - Mask bounding the spinning reel columns)
        └── VFX_NearWin (sp.Skeleton - Near-win anticipation spine effect)
```

---

## 2. Component Co-Location on `SlotTableModule`

| Attached Component | Responsibility |
| :--- | :--- |
| **`SlotTableModule`** | Master table engine; handles `initTable()`, `startSpin()`, `stopSpin()`, `fastStop()`. |
| **`TableModuleConfig`** | Stores reel timing constants, speed easing curves, and deceleration bounces. |
| **`SlotTableData`** | Reactive state conversion; ingests backend matrices into 2D column arrays. |
| **`SlotTableNearWinModule`** | Evaluates scatter anticipation tension and extends reel stop delays. |
| **`SlotModuleEditorTag`** | Editor helper component for hierarchy tagging. |

---

## 3. Child Node Structure

- **`SymbolPool` (`SlotSymbolManager`)**: Dedicated pool for spawning static, blur, and spinning symbol nodes.
- **`Table` (`cc.Mask`)**: Houses dynamically instantiated column reels (`SlotReelModule`), clipping symbols to the visible display frame.
- **`VFX_NearWin` (`sp.Skeleton`)**: Anticipation frame animation shifted above individual reels during near-win suspense.
