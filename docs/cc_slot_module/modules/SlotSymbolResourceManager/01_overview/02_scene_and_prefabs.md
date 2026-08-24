---
id: "cc_slot_module:SlotSymbolResourceManager:overview:scene_and_prefabs"
title: "SlotSymbolResourceManager Scene Prefab Placement & Pairing"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "overview", "scene_prefabs", "co_location"]
---

# 🌳 SlotSymbolResourceManager Scene Prefab Placement & Pairing

---

## 1. Symbol Prefab Co-Location Architecture

In Cocos Creator Editor, `SlotSymbolResourceManager` and `SlotSymbolModule` are mounted **on the same root node of `SymbolPrefab.prefab`**:

```text
SymbolPrefab (Node: Both components mounted together)
├── [Component 1] SlotSymbolModule (Presentation & Animation)
├── [Component 2] SlotSymbolResourceManager (Asset provider)
│
├── Background (cc.Sprite - Optional card frame)
├── Sprite (cc.Sprite - Target for static/blur textures)
└── SpineSkeleton (sp.Skeleton - Target for skeletal animations)
```

---

## 2. Companion Interaction Interface (`ISlotSymbolResource`)

```typescript
export interface ISlotSymbolResource {
    getSymbolFrame(symbolCode: string): cc.SpriteFrame;
    getBlurSymbolFrame(symbolCode: string): cc.SpriteFrame;
    getBackgroundFrame(symbolCode: string): cc.SpriteFrame;
    getSymbolSkeleton(symbolCode: string): sp.SkeletonData;
    getColorNormal(): cc.Color;
    getColorDim(): cc.Color;
}
```
