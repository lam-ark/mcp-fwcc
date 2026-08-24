---
id: "cc_slot_module:MultipleSymbolManager:overview:scene_and_prefabs"
title: "MultipleSymbolManager Scene Placement & Multi-Spine Pooling"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ MultipleSymbolManager Scene Placement & Multi-Spine Pooling

---

## 1. Scene Graph Placement

`MultipleSymbolManager` replaces or extends standard `SlotSymbolManager` on the `SymbolPool` node in games requiring multi-spine bundles or variable sized symbols:

```text
Canvas/Director/GameMode/MainGamePrefab/SlotTableModule
└── SymbolPool [Node]
    └── MultipleSymbolManager (Multi-spine bundle pool & spine skin manager)
```

---

## 2. Multi-Spine Instantiation

Manages distinct Spine skeletons for character symbols, frame effects, and particle overlays grouped into compound symbol prefabs.
