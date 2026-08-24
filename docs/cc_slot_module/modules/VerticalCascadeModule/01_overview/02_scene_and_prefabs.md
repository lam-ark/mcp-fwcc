---
id: "cc_slot_module:VerticalCascadeModule:overview:scene_and_prefabs"
title: "VerticalCascadeModule Scene Node Placement & Prefab Setup"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ VerticalCascadeModule Scene Node Placement & Prefab Setup

---

## 1. Inspected Scene Node Placement

`VerticalCascadeModule` is mounted on the `CascadeModule` node inside mode prefabs:

```text
Canvas/Director/GameMode/MainGamePrefab
└── CascadeModule [Node with Components]
    ├── [Component 1] VerticalCascadeModule (Component: VerticalCascadeModule)
    │   ├── container: (Node reference holding visual falling symbols)
    │   └── symbolManager: (Reference to SlotSymbolManager)
    ├── [Component 2] CascadeModuleData
    ├── [Component 3] CascadeModuleConfig
    └── [Component 4] SlotModuleEditorTag
```

---

## 2. Inspector Properties

| Property | Type | Function |
| :--- | :--- | :--- |
| `container` | `cc.Node` | Parent node hosting dynamic falling symbol instances. |
| `symbolManager` | `SlotSymbolManager` | Reference to the symbol pooling manager. |
