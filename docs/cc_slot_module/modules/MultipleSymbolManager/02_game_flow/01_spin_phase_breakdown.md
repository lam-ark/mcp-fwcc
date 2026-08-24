---
id: "cc_slot_module:MultipleSymbolManager:game_flow:spin_phase_breakdown"
title: "MultipleSymbolManager Spin Phase Multi-Pool Breakdown"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "game_flow", "spin_phases", "multi_template", "recycling"]
---

# 🌀 MultipleSymbolManager Spin Phase Multi-Pool Breakdown

---

## 1. Spin Lifecycle & Multi-Template Dispatch Flow

```mermaid
sequenceDiagram
    autonumber
    participant Table as SlotTableModule
    participant Reel as SlotReelModule
    participant MSM as MultipleSymbolManager
    participant Pool as SlotCustomNodePool

    Note over Table,Pool: Phase 1: Spin Start & Blur Symbol Checkout
    Table->>MSM: removeAllSymbols() (Returns non-sticky symbols to multi-pool)
    Reel->>MSM: createBlurSymbol(code, size, parent, "REEL")
    MSM->>Pool: get(code) (Checks specialSymbolTemplates vs normal pool)
    Pool-->>MSM: Returns matching cc.Node instance
    MSM-->>Reel: Configures symbol node for blur movement

    Note over Table,Pool: Phase 2: Deceleration & Static Landing
    Reel->>MSM: createSymbol(code, size, parent, "REEL")
    MSM->>Pool: get(code)
    Pool-->>MSM: Returns specialized or normal symbol Node
    MSM->>MSM: getSymbolModule(symbol).init(code) + changeToStaticSymbol()
    Reel->>MSM: returnSymbol(blurSymbolNode) (Blur nodes recycled to pool)

    Note over Table,Pool: Phase 3: Payline Win Highlight & Z-Sorting
    Table->>MSM: updateSymbolSiblingIndex(hitSymbols)
    MSM->>MSM: sortSymbols() ensuring high-priority multi-template symbols layer correctly
```

---

## 2. Multi-Template Allocation Logic Across Spin Loop

1. **Spin Initiation (Pre-Spin Clear)**:
   - `removeAllSymbols()` reclaims all previous active symbol instances, routing them back through `returnSymbol()`.
   - Nodes are returned to their designated pool key in `SlotCustomNodePool` (`SPECIAL_SYMBOLS` vs `NORMAL_POOL_NAME`).

2. **Reel Spinning & Blur Allocation**:
   - `SlotReelModule` queries `createBlurSymbol(code)` during reel rolling.
   - `MultipleSymbolManager` queries `this.symbolPool.get(code)`. If `code` matches an item in `specialSymbolTemplates`, the dedicated Spine/Particle prefab is checked out.

3. **Matrix Landing (Stop Presentation)**:
   - Static symbols are requested using `createSymbol(code)`.
   - The corresponding symbol node is checked out and initialized with `init(code)` before being attached to the reel column.

4. **FTR & Fast Stop Abort**:
   - `resetAllEffectAndTasks()` immediately halts any running Spine animations or particle effects across both standard and special symbol instances.
