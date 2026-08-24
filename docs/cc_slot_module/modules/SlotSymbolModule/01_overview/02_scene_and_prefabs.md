---
id: "cc_slot_module:SlotSymbolModule:overview:scene_and_prefabs"
title: "SlotSymbolModule Scene Prefab Hierarchy & Node Composition"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "overview", "scene_prefabs", "node_composition"]
---

# 🌳 SlotSymbolModule Scene Prefab Hierarchy & Node Composition

---

## 1. Symbol Prefab Internal Node Tree

A standard symbol prefab (`SymbolPrefab.prefab`) instantiated by `SlotSymbolManager` has the following node structure:

```text
SymbolNode (SlotSymbolModule.ts)
├── Background (cc.Sprite - Optional frame/card background)
├── Sprite (cc.Sprite - Static or Motion Blur texture)
└── SpineSkeleton (sp.Skeleton - Spine animation player)
```

---

## 2. Dynamic Placement in Scene Tree

`SlotSymbolModule` nodes exist in two primary locations in the scene graph:

```text
Canvas/Director/GameMode/MainGamePrefab
├── SlotTableModule
│   ├── SymbolPool (cc.NodePool container managed by SlotSymbolManager)
│   └── Table (cc.Mask)
│       └── Reel_0 (SlotReelModule)
│           ├── Symbol_0 (SlotSymbolModule - Active Onscreen Symbol)
│           ├── Symbol_1 (SlotSymbolModule - Active Onscreen Symbol)
│           └── Symbol_2 (SlotSymbolModule - Active Onscreen Symbol)
│
└── SlotTablePaylineModule
    └── PaylineSymbolModule
        └── PaylineContainer
            └── PaylineWinSymbol (SlotSymbolModule - Highlight Overlay Node)
```

---

## 3. Companion Service Bindings

| Injected Companion | Interface Type | Resolution Method | Purpose |
| :--- | :--- | :--- | :--- |
| `resourceManager` | `ISlotSymbolResource` | `this.getComponent(SlotSymbolResourceManager)` | Loads sprite frames, blur textures, and Spine skeleton data assets. |
| `SlotSymbolManager` | Pooling Manager | Direct pool checkout/return | Manages `cc.NodePool` instantiation and lifecycle. |
