---
id: "cc_slot_module:SlotSymbolResourceManager:overview:architecture_and_role"
title: "SlotSymbolResourceManager Architectural Role & Asset Provider"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "overview", "architecture", "asset_provider", "symbol_pair"]
---

# 🎨 SlotSymbolResourceManager Architectural Role & Asset Provider

---

## 1. Architectural Purpose: The Symbol Co-Located Pair

`SlotSymbolResourceManager` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolResourceManager.ts`) is the **Asset & Resource Provider** companion for `SlotSymbolModule`.

Mounted **together on the same `SymbolNode` in the `SymbolPrefab`**, they form a tightly-coupled presentation pair:
* **`SlotSymbolModule`** (View & Animation Controller): Manages node state, playback tracks, display modes (Static vs Blur vs Spine), and pooling resets.
* **`SlotSymbolResourceManager`** (Asset Provider): Stores, indexes, and returns sprite frames, motion-blur textures, card backgrounds, Spine skeleton data, and color schemes.

```mermaid
graph LR
    subgraph SymbolNode Co-located Pair (SymbolPrefab)
        Manager[🎨 SlotSymbolResourceManager<br/>• Implements ISlotSymbolResource<br/>• Static/Blur/Bg SpriteFrames Cache<br/>• Spine SkeletonData Cache<br/>• Normal & Dim Color Palette]
        
        Entity[🎰 SlotSymbolModule<br/>• Presentation & Animation Controller<br/>• Tri-State Engine: Static / Blur / Spine<br/>• NodePool Lifecycle & Reset]
    end

    Entity -->|1. getComponent in onLoad| Manager
    Entity -->|2. getSymbolFrame / getBlurSymbolFrame| Manager
    Entity -->|3. getSymbolSkeleton / getColorDim| Manager
```

---

## 2. Core Responsibilities

1. **Asset Dictionary Indexing (`initAssets`)**: In `onLoad()`, converts inspector arrays (`symbolSfList`, `blurSymbolSfList`, `symbolSkeletons`) into high-speed $O(1)$ dictionary lookups (`staticFrameAssets`, `blurFrameAssets`, `skeletonAssets`).
2. **Fallback Motion Blur (`getBlurSymbolFrame`)**: Returns motion-blur texture if defined; otherwise automatically falls back to static sprite frame without failing.
3. **Color Palette Provision (`getColorNormal`, `getColorDim`)**: Supplies bright white (`#FFFFFF`) and dimmed grey (`#646464`) vertex colors for payline highlighting and win evaluation.
