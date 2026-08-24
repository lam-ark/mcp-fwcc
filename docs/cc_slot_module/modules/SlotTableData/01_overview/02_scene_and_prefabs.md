---
id: "cc_slot_module:SlotTableData:overview:scene_and_prefabs"
title: "SlotTableData Scene Co-Location & Companion Hierarchy"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "overview", "scene_prefabs", "co_location", "hierarchy"]
---

# 🌳 SlotTableData Scene Co-Location & Companion Hierarchy

---

## 1. Co-Located Scene Graph Architecture

`SlotTableData` is mounted alongside `SlotTableModule`, `TableModuleConfig`, and `SlotSymbolManager` on the `Table` node:

```text
Canvas/Director/GameMode/NormalGame/BoardG/Table
├── [Component] SlotTableModule (Visual Presentation & Reel Coordinator)
├── [Component] SlotTableData (Reactive Matrix Parser)
├── [Component] TableModuleConfig (Geometry & Speed Settings)
├── [Component] SlotSymbolManager (Symbol Pooling & Recycling)
└── [Component] SlotTableSoundEffectModule (Audio Triggers)
```

---

## 2. Companion Dependency Quad

| Companion Component | Type | Binding Method | Role |
| :--- | :--- | :--- | :--- |
| **`SlotTableModule`** | Visual View | Peer Component (`getComponent`) | Consumes `tableData.getMatrix()` to populate column symbols. |
| **`TableModuleConfig`** | Configuration | Peer Component (`getComponent`) | Provides `TABLE_FORMAT` array for 2D matrix conversion. |
| **`GameDataStore`** | Central Store | IoC (`@inject`) | Dispatches reactive matrix state slices to `registeredKeys`. |
