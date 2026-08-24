---
id: "cc_slot_module:SlotSymbolManager:overview:scene_and_prefabs"
title: "SlotSymbolManager Scene Placement & Prefab Templates"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌳 SlotSymbolManager Scene Placement & Prefab Templates

## 1. Scene Placement Hierarchy

Mounted as a sibling component on the Table node:

```text
Canvas/Director/GameMode/BoardG/Table
├── SlotTableModule (Grid orchestrator)
├── TableModuleConfig (Geometrical format & index definitions)
├── SlotTableData (State data model)
└── SlotSymbolManager ➔ [Symbol pooling & Z-order sorting]
    └── template: cc.Prefab ➔ SymbolTemplate.prefab
        ├── cc.Sprite (Static visual sprite)
        ├── cc.Sprite (Blur visual sprite)
        └── sp.Skeleton (Spine animation skeleton)
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`template`** | `cc.Prefab` | `null` | The base symbol prefab instantiated into `symbolPool`. Must contain `SlotSymbolModule`. |
| **`initCount`** | `number` | `15` | Number of symbol instances pre-warmed during `onLoadExtend()`. |
| **`isSymbolPool`**| `boolean` | `true` | `true`: Return nodes directly to `cc.NodePool`; `false`: Reparent nodes to `this.node`. |
