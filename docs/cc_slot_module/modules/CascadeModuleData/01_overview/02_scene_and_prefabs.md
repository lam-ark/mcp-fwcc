---
id: "cc_slot_module:CascadeModuleData:overview:scene_and_prefabs"
title: "CascadeModuleData Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ CascadeModuleData Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Attached alongside `VerticalCascadeModule` and `CascadeModuleConfig` on the `CascadeModule` node:

```text
Canvas/Director/GameMode/MainGamePrefab
└── CascadeModule [Node with Components]
    ├── VerticalCascadeModule
    ├── CascadeModuleData (Component: CascadeModuleData)
    ├── CascadeModuleConfig
    └── SlotModuleEditorTag
```
