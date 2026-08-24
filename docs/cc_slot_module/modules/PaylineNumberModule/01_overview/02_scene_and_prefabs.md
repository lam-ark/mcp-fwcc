---
id: "cc_slot_module:PaylineNumberModule:overview:scene_and_prefabs"
title: "PaylineNumberModule Scene Node Placement & Gutter Hierarchy"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ PaylineNumberModule Scene Node Placement & Gutter Hierarchy

---

## 1. Inspected Scene Node Placement

`PaylineNumberModule` is attached as a sub-module under `SlotTablePaylineModule` or mounted directly on the `BoardG` gutters:

```text
Canvas/Director/GameMode/MainGamePrefab
└── SlotTablePaylineModule
    ├── PaylineSymbolModule
    ├── SymbolPool (SlotSymbolManager)
    └── PaylineNumberModule [Node with Components]
        ├── [Component 1] PaylineNumberModule
        ├── LeftGutter [Child Node] (container[0])
        │   ├── num_1 (PaylineNumberItem: numberID = "1")
        │   ├── num_2 (PaylineNumberItem: numberID = "2")
        │   └── ...
        └── RightGutter [Child Node] (container[1])
            ├── num_1 (PaylineNumberItem: numberID = "1")
            ├── num_2 (PaylineNumberItem: numberID = "2")
            └── ...
```

---

## 2. Inspector Properties

| Property | Type | Function |
| :--- | :--- | :--- |
| `container` | `cc.Node[]` | Array of parent container nodes (e.g. `[LeftGutterNode, RightGutterNode]`) scanned for `PaylineNumberItem` components. |
