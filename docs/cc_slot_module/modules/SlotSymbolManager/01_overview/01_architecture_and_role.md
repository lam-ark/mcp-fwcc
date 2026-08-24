---
id: "cc_slot_module:SlotSymbolManager:overview:architecture_and_role"
title: "SlotSymbolManager Node Pooling & Symbol Lifecycle Architecture"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "overview", "architecture", "node_pool", "symbol_lifecycle", "z_order"]
---

# 🏛️ SlotSymbolManager Node Pooling & Symbol Lifecycle Architecture

## 1. Executive Summary & Purpose

`SlotSymbolManager` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolManager.ts`) is the **Central Symbol Node Pooling, Index Allocation & Z-Order Sorting Engine** in the `cc-common` Slot SDK.

Extending `SlotBaseModule`, it manages a high-performance `cc.NodePool` of symbol prefabs (`template`), maps sequential 2D matrix indexes (`0..14` derived from `TableModuleConfig.SYMBOL_INDEXES`) to active visual nodes, tags symbol instances with ownership metadata (`owner`), protects persistent symbols (`STICKY`, `GIGABLOX`) from premature recycling, and calculates dynamic Z-ordering (Sibling Index) based on symbol payout priorities (`GameConfig.SYMBOL_CONFIG`).

```mermaid
graph TD
    TableConfig[TableModuleConfig<br/>TABLE_FORMAT: 3x3x3x3x3<br/>SYMBOL_INDEXES: 0..14] -->|Index Mapping Coordinates| Manager[SlotSymbolManager]
    GameConfig[GameConfig.SYMBOL_CONFIG<br/>Priority: Wild 10, Scatter 9, HighPay 5]| Z-Ordering Rules --> Manager

    subgraph Pool Management
        Manager -->|Recycle / Borrow| Pool["cc.NodePool (symbolPool)<br/>Initial size: initCount (15)"]
        Manager -->|Tracking Array| Using["usingSymbols: cc.Node[]"]
    end

    subgraph Downstream Consumers
        Manager -->|getSymbolByIndex / createSymbol| Reels[SlotReelModule Columns]
        Manager -->|updateSymbolSiblingIndex| Paylines[SlotTablePaylineModule]
        Manager -->|findObjectByIndex| Features[Sticky Wild / Expanding Multipliers]
    end
```

---

## 2. Core Responsibilities

1. **High-Performance Memory Pooling (`initSymbolPool`)**: Pre-instantiates `initCount` symbol instances during initialization to eliminate runtime garbage collection (GC) pauses during fast spins.
2. **Index-Based Symbol Coordinate Mapping (`getSymbolByIndex`, `findObjectByIndex`)**: Binds active symbol nodes to logical grid indices (`0..14`), enabling payline and win-frame modules to retrieve symbols instantly without traversing the scene tree.
3. **Symbol Ownership & State Management (`owner`, `index`)**: Tracks which subsystem currently owns a symbol node (`REEL`, `PAYLINE`, `EXPANDING_WILD`, `STICKY`) to prevent accidental destruction or visual collision.
4. **Dynamic Z-Order & Sibling Sorting (`updateSymbolSiblingIndex`, `sortSymbols`)**: Renders high-priority symbols (Wilds, Scatters, High-Pays) on top of low-pay symbols using `layerConfig` priority dictionaries.
5. **Sticky & Special Symbol Retention (`removeAllSymbols`)**: Protects `STICKY` and `GIGABLOX` symbols from being flushed during table resynchronization.
