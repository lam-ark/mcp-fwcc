---
id: "cc_slot_module:TableModuleConfig:overview:scene_and_prefabs"
title: "TableModuleConfig Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_module_config", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ TableModuleConfig Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `TableModuleConfig` resides directly on the `SlotTableModule` node:

```text
MainGamePrefab
└── SlotTableModule [Node]
    ├── SlotTableModule
    ├── TableModuleConfig (Component: TableModuleConfig)
    ├── SlotTableData
    ├── SlotTableNearWinModule
    └── SlotModuleEditorTag
```
