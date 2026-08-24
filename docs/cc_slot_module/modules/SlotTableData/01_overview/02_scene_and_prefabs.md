---
id: "cc_slot_module:SlotTableData:overview:scene_and_prefabs"
title: "SlotTableData Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotTableData Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotTableData` resides directly on the `SlotTableModule` node:

```text
MainGamePrefab
└── SlotTableModule [Node]
    ├── SlotTableModule
    ├── TableModuleConfig
    ├── SlotTableData (Component: SlotTableData)
    ├── SlotTableNearWinModule
    └── SlotModuleEditorTag
```

---

## 2. Co-Location Role

Being attached to the same node as `SlotTableModule`, `SlotTableModule` retrieves `SlotTableData` directly via `this.getComponent(SlotTableData)` without inter-node lookup overhead.
