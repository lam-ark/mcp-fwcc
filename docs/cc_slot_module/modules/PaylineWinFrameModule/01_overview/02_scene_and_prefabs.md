---
id: "cc_slot_module:PaylineWinFrameModule:overview:scene_and_prefabs"
title: "PaylineWinFrameModule Scene Graph Placement"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ PaylineWinFrameModule Scene Graph Placement

---

## 1. Scene Graph Placement

Positioned as an overlay layer child node inside `SlotTablePaylineModule`:

```text
MainGamePrefab
└── SlotTablePaylineModule
    ├── PaylineSymbolModule
    ├── SymbolPool (SlotSymbolManager)
    └── PaylineWinFrameModule [Node]
        └── Container (cc.Node - Host for pooled win frame instances)
```

---

## 2. Inspector Properties

| Property | Type | Function |
| :--- | :--- | :--- |
| `container` | `cc.Node` | Parent node hosting active win frame prefabs. |
| `template` | `cc.Prefab` | Prefab asset defining the glowing win border box animation. |
