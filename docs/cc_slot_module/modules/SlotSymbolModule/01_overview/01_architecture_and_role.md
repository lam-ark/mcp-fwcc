---
id: "cc_slot_module:SlotSymbolModule:overview:architecture_and_role"
title: "SlotSymbolModule Visual Entity Architecture & Display Tri-State"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "overview", "architecture", "symbol_entity", "tri_state", "spine"]
---

# 🎰 SlotSymbolModule Visual Entity Architecture & Display Tri-State

---

## 1. Architectural Purpose & Entity Boundary

`SlotSymbolModule` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule.ts`) is the **Universal Visual Symbol Entity** in the `cc-common` Slot Framework.

Attached to every symbol node instantiated by `SlotSymbolManager` or `SlotReelModule`, it encapsulates the complete visual lifecycle of a grid cell. It operates across **3 distinct rendering modes (Tri-State Display Engine)**:

```mermaid
graph TD
    subgraph SlotSymbolModule Tri-State Display Engine
        Static[1. Static Sprite Mode<br/>• cc.Sprite: High-res texture<br/>• Zero CPU overhead in idle state]
        
        Blur[2. Blur Sprite Mode<br/>• cc.Sprite: Motion-blurred texture<br/>• High-speed reel rolling]
        
        Spine[3. Spine Skeleton Mode<br/>• sp.Skeleton: Dynamic 60fps skeletal animations<br/>• Win celebrations, triggers & transitions]
    end

    Reel[SlotReelModule Roll] -->|changeToBlurSymbol| Blur
    Reel -->|Reel Bounce Landing: showStatic| Static
    Payline[SlotTablePaylineModule Win] -->|playAnimationWin| Spine
    Payline -->|Reset Cycle: showStatic| Static
```

---

## 2. Core Responsibilities

1. **Display State Switching (`switchToStatic`)**: Toggles visibility between static `cc.Sprite` and `sp.Skeleton` components without destroying nodes.
2. **Resource Fetching via `SlotSymbolResourceManager`**: Pulls sprite frames, blur textures, and Spine skeleton data dynamically by symbol code (e.g. `"K1"`, `"WILD"`, `"SCATTER"`).
3. **Multi-Cell Grid Dimension Support (`mapSymbolData`, `size`)**: Parses composite strings (e.g. `"WILD_1_3"`) for $1\times 2$, $1\times 3$, or $2\times 2$ Mega Symbols.
4. **Payline Dimming & Highlighting (`enableHighlight`, `disableHighlight`)**: Modifies renderer vertex colors (`cc.Color`) for non-winning dimmed symbols.
5. **Zero-Allocation Node Pooling Lifecycle (`resetBeforeBackToPool`, `clearSkeletonData`)**: Flushes skeleton data and restores resting state before returning to `SlotSymbolManager`.
