---
id: "cc_slot_module:MultipleSymbolManager:director_writer:pipeline_orchestration"
title: "MultipleSymbolManager Director & Writer Pipeline Orchestration"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "director_writer", "pipeline", "orchestration"]
---

# 🎼 MultipleSymbolManager Director & Writer Pipeline Orchestration

---

## 1. Interaction with Table, Reels & Custom Pool Pipeline

```mermaid
graph LR
    Director[SlotGameDirector / Writer] -->|Executes Spin Script| Table[SlotTableModule]
    Table -->|Coordinates Reels| Reel[SlotReelModule]
    Reel -->|Requests Symbol Code| MSM[MultipleSymbolManager]
    MSM -->|Delegates Checkout| SCNP[SlotCustomNodePool]
    SCNP -->|Pulls from Specialized Pool| SpecialNode[Spine/Custom Symbol Node]
    SCNP -->|Pulls from Default Pool| NormalNode[Normal Symbol Node]
```

---

## 2. Pipeline Execution Steps

1. **Table Configuration Ingestion**:
   - During `onLoadExtend`, `SlotTableModule` propagates `gameConfig` via `setGameConfig()`, configuring priority layers for both standard and special symbols.
2. **Reel Multi-Prefab Borrowing**:
   - When `SlotReelModule` receives matrix data from Writer/Director commands (e.g. `showReelMatrix`), it calls `createSymbol(code)` on `MultipleSymbolManager`.
   - `MultipleSymbolManager` passes `code` into `SlotCustomNodePool`, retrieving the exact prefab node without `SlotReelModule` needing to know which pool supplied it.
3. **Payline Highlighting & Z-Order Sorting**:
   - `SlotTablePaylineModule` triggers `updateSymbolSiblingIndex()`, ensuring special multi-template symbols (e.g. 3D Wilds, Jackpots) stay elevated above background elements during win animations.
