---
id: "cc_slot_module:SlotSymbolResourceManager:overview:scene_and_prefabs"
title: "SlotSymbolResourceManager Service Injection & Placement"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "symbol_resource_manager", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotSymbolResourceManager Service Injection & Placement

---

## 1. Scene Graph Integration

`SlotSymbolResourceManager` is attached to symbol manager nodes or injected globally to provide asset cache services:

```text
Canvas/Director/GameMode/MainGamePrefab
├── SlotTableModule
│   └── SymbolPool [Node] (SlotSymbolManager, SlotSymbolResourceManager)
└── SlotTablePaylineModule
    └── SymbolPool [Node] (SlotSymbolManager, SlotSymbolResourceManager)
```

---

## 2. Asset Lookup Responsibility

Acts as the asset dictionary providing `getSymbolSpriteFrame(symbolName)` and `getSpineSkeletonData(symbolName)` to both the spinning reel pool and the payline presentation pool.
