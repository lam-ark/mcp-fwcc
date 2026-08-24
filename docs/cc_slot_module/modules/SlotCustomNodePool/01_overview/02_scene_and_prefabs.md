---
id: "cc_slot_module:SlotCustomNodePool:overview:scene_and_prefabs"
title: "SlotCustomNodePool Memory Pooling Integration"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "node_pool", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotCustomNodePool Memory Pooling Integration

---

## 1. Internal Pool Engine

`SlotCustomNodePool` is utilized internally by `SlotSymbolManager` and `PoolFactoryModule` instances mounted across the scene graph:

```text
Canvas/Director/GameMode/MainGamePrefab
├── SlotTableModule/SymbolPool (SlotSymbolManager ➔ uses SlotCustomNodePool)
├── SlotTablePaylineModule/SymbolPool (SlotSymbolManager ➔ uses SlotCustomNodePool)
└── TransformSymbolModule/VfxPool (PoolFactoryModule ➔ uses SlotCustomNodePool)
```

---

## 2. Zero Garbage Collection (GC) Guarantee

Pre-instantiates nodes and maintains a fixed-capacity FIFO/LIFO stack, eliminating runtime memory allocations during continuous auto-spins.
