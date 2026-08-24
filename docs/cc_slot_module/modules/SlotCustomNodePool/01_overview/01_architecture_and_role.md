---
id: "cc_slot_module:SlotCustomNodePool:overview:architecture_and_role"
title: "SlotCustomNodePool Heterogeneous Multi-Pool Architecture"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "overview", "architecture", "multi_pool", "heterogeneous_pooling"]
---

# 🏊 SlotCustomNodePool Heterogeneous Multi-Pool Architecture

---

## 1. Architectural Purpose & Problem Statement

In slot titles with complex visual hierarchies (e.g. 3D Spines for Wilds, Dragon Scatter animations, separate Jackpot card templates), a single uniform symbol prefab (`SymbolPrefab.prefab`) is insufficient.

`SlotCustomNodePool` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotCustomNodePool.ts`) is a **Heterogeneous Multi-Pool Manager**. It encapsulates a `Map<string, cc.NodePool>` that routes symbol allocations and recycling across multiple distinct prefab templates based on `symbolCode`:

```mermaid
graph TD
    Client[MultipleSymbolManager] -->|get symbolCode| Router[SlotCustomNodePool Routing Engine]
    
    subgraph Multi-Pool Map: _pools
        NormalPool[Normal NodePool<br/>• Normal Symbol Prefab<br/>• Standard pay symbols: A, K, Q, J, 10]
        WildPool[Special NodePool: WILD<br/>• Wild Prefab with Full 3D Spine]
        ScatterPool[Special NodePool: SCATTER<br/>• Scatter Teaser Prefab with Lightning VFX]
        BonusPool[Special NodePool: BONUS<br/>• Bonus Chest Prefab]
    end

    Router -->|symbolCode === 'WILD'| WildPool
    Router -->|symbolCode === 'SCATTER'| ScatterPool
    Router -->|symbolCode === 'BONUS'| BonusPool
    Router -->|Default fallback| NormalPool
```

---

## 2. Core Responsibilities

1. **Multi-Template Pool Orchestration (`initSymbolPool`)**: Instantiates normal and special symbol pools using `SpecialSymbolTemplates` configurations.
2. **Metadata Tagging (`setNodeMetadata`)**: Injects metadata keys into allocated nodes:
   - `node['__custom_pool_name_'] = poolName` (Guarantees correct routing upon recycling).
   - `node[SPECIAL_SYMBOL_KEY] = isSpecial` (Protects persistent Spine skeleton data).
3. **Safe Dynamic Fallback (`getSymbolFromPool`)**: If a pool is exhausted, dynamically instantiates the correct template prefab without dropping frames.
4. **Origin-Aware Node Return (`put`)**: Inspects `node['__custom_pool_name_']` and returns the node to its exact origin pool in the map.
