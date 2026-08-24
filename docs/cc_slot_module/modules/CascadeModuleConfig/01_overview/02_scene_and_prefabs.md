---
id: "cc_slot_module:CascadeModuleConfig:overview:scene_and_prefabs"
title: "CascadeModuleConfig Scene Node Placement & Prefab Setup"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ CascadeModuleConfig Scene Node Placement & Prefab Setup

---

## 1. Inspected Scene Node Placement

`CascadeModuleConfig` is attached directly to the `CascadeModule` node inside mode prefabs:

```text
Canvas/Director/GameMode/MainGamePrefab
└── CascadeModule [Node with Components]
    ├── [Component 1] VerticalCascadeModule
    ├── [Component 2] CascadeModuleData
    ├── [Component 3] CascadeModuleConfig (Component: CascadeModuleConfig)
    └── [Component 4] SlotModuleEditorTag
```
