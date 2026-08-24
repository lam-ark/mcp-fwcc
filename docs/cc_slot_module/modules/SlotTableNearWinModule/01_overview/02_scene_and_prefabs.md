---
id: "cc_slot_module:SlotTableNearWinModule:overview:scene_and_prefabs"
title: "SlotTableNearWinModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotTableNearWinModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotTableNearWinModule` resides on `SlotTableModule` and wires its child `VFX_NearWin` node:

```text
MainGamePrefab
└── SlotTableModule [Node]
    ├── SlotTableModule
    ├── TableModuleConfig
    ├── SlotTableData
    ├── SlotTableNearWinModule (Component: SlotTableNearWinModule)
    ├── SlotModuleEditorTag
    └── VFX_NearWin [Child Node] (Component: sp.Skeleton - Anticipation VFX skeleton)
```

---

## 2. Inspector Wiring

- **`nearWinEffect`**: Injected/wired to child `VFX_NearWin` skeleton node.
- When near-win tension triggers, `SlotTableNearWinModule` moves `VFX_NearWin` to the corresponding column's X position and enables the Spine animation.
