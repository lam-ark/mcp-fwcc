---
id: "cc_slot_module:SlotTablePaylineModule:overview:scene_and_prefabs"
title: "SlotTablePaylineModule Scene Hierarchy & Prefab Wiring"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotTablePaylineModule Scene Hierarchy & Prefab Wiring

---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotTablePaylineModule` is mounted as a sibling to `SlotTableModule` inside mode prefabs (`MainGamePrefab`, `FreeGamePrefab`):

```text
Canvas
└── Director (GameConfig, GameDataStore, GameInit, GameDirector)
    └── GameMode (OnAddGameMode)
        ├── BG_MainG (cc.Sprite)
        ├── BoardG (cc.Sprite)
        └── MainGamePrefab (BaseGameMode, NormalGameDirectorModule, NormalGameWriterModule, OnAddSlotModule)
            ├── SlotTableModule (SlotTableModule, TableModuleConfig, SlotTableData, SlotTableNearWinModule)
            │   ├── SymbolPool (SlotSymbolManager)
            │   ├── Table (cc.Mask - Reel column container)
            │   └── VFX_NearWin (sp.Skeleton)
            ├── SlotTablePaylineModule [Node with Components]
            │   ├── [Component 1] SlotTablePaylineModule
            │   ├── [Component 2] PaylineConfig
            │   ├── [Component 3] SlotTablePaylineData
            │   ├── [Component 4] SlotModuleEditorTag
            │   └── [Children Nodes]:
            │       ├── PaylineSymbolModule (PaylineSymbolModule)
            │       ├── SymbolPool (SlotSymbolManager - dedicated payline symbol pool)
            │       ├── WinFramesLayer (PaylineWinFrameModule - optional frame layer)
            │       └── LineDrawingLayer (PaylineLineModule - optional vector line layer)
            └── TransformSymbolModule (TransformSymbolModule, TransformSymbolConfig, TransformSymbolData)
```

---

## 2. Component Quad on Single Node

In the production SDK, `SlotTablePaylineModule`, `PaylineConfig`, and `SlotTablePaylineData` are co-located on the **same Node** (`SlotTablePaylineModule`), maximizing cohesion:

| Attached Component | Type | Responsibility |
| :--- | :--- | :--- |
| **`SlotTablePaylineModule`** | `SlotBaseModule` | Event router, instantiates `payLineEmitter`, discovers child components. |
| **`PaylineConfig`** | `cc.Component` | Specifies `PAYLINE_TYPE` (Lines, AllWays, Cluster, ScatterPay), `TABLE_CONFIG.format`, cell sizes. |
| **`SlotTablePaylineData`** | `BaseDataModule` | Listens to reactive keys (`payLines`, `matrix`) and normalizes geometric win data. |
| **`SlotModuleEditorTag`** | `cc.Component` | Editor metadata and visual gizmo helper. |

---

## 3. Child Symbol Pool Layer

Notice that `SlotTablePaylineModule` contains a dedicated child `SymbolPool` node equipped with `SlotSymbolManager`:
- **Isolation**: Prevents win symbol animation pooling from corrupting or exhausting the active spinning reel symbol pool in `SlotTableModule/SymbolPool`.
- **Top-Level Rendering**: Sits above the column masks of `SlotTableModule/Table`, ensuring winning Spine animations are never truncated.
