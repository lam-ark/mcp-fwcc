---
id: "cc_slot_module:SlotReelModule:overview:scene_and_prefabs"
title: "SlotReelModule Dynamic Instantiation & Scene Placement"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotReelModule Dynamic Instantiation & Scene Placement

---

## 1. Runtime Instantiation inside `SlotTableModule/Table`

`SlotReelModule` instances are not hardcoded in the scene hierarchy; they are dynamically instantiated on startup inside `SlotTableModule/Table` (`cc.Mask`):

```text
MainGamePrefab
└── SlotTableModule
    └── Table [Node with cc.Mask]
        ├── Reel_0 (Instantiated Node with SlotReelModule Component)
        ├── Reel_1 (Instantiated Node with SlotReelModule Component)
        ├── Reel_2 (Instantiated Node with SlotReelModule Component)
        ├── Reel_3 (Instantiated Node with SlotReelModule Component)
        └── Reel_4 (Instantiated Node with SlotReelModule Component)
```

---

## 2. Parent-Child Relationship

- **Parent Container**: `SlotTableModule/Table` (`cc.Mask`) clips symbols outside the visible reel window.
- **Child Symbols**: Each `SlotReelModule` column hosts symbol instances retrieved from sibling `SlotTableModule/SymbolPool` (`SlotSymbolManager`).
