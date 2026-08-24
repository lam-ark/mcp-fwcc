---
id: "cc_slot_module:MultipleSymbolManager:overview:architecture_and_role"
title: "MultipleSymbolManager Architecture & Multi-Template Delegation"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "overview", "architecture", "multi_template", "delegation"]
---

# 🎭 MultipleSymbolManager Architecture & Multi-Template Delegation

---

## 1. Architectural Purpose

`MultipleSymbolManager` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/MultipleSymbolManager.ts`) is an advanced specialization of `SlotSymbolManager`.

While standard `SlotSymbolManager` allocates every symbol from a single uniform `template` prefab, `MultipleSymbolManager` overrides the pooling engine by instantiating and delegating to **`SlotCustomNodePool`**. This enables games to assign completely distinct prefab architectures for special symbols (e.g. 3D Spine Wilds, particle-emitting Scatters, Jackpot chests):

```mermaid
graph TD
    Table[SlotTableModule / SlotReelModule] -->|createSymbol code| MSM[MultipleSymbolManager]
    
    subgraph MultipleSymbolManager Architecture
        MSM -->|Inherits lifecycle from| SSM[Base: SlotSymbolManager]
        MSM -->|Overrides symbolPool with| SCNP[SlotCustomNodePool Engine]
    end

    SCNP -->|Routes to normal or special pool| Node[Returned Symbol cc.Node]
```

---

## 2. Core Responsibilities

1. **Inspector Template Configuration (`specialSymbolTemplates`)**: Exposes an array of `SpecialSymbolTemplates` in Cocos Creator Editor for artist/developer prefab binding.
2. **Custom Pool Initialization (`initSymbolPool`)**: Instantiates `SlotCustomNodePool` passing the base template, initial count, and special templates list.
3. **Targeted Checkout Delegation (`getSymbolFromPool`)**: Delegates `getSymbolFromPool(code)` directly to `this.symbolPool.get(code)`.
