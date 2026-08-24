---
id: "cc_slot_module:systems:table_engine:index"
title: "Table, Reels & Symbol Engine Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "reels", "symbols", "index", "flow", "module_linkage"]
---

# 🎰 Table, Reels & Symbol Engine Architecture Index

Welcome to the technical specification of the **Table, Reels & Symbol Rendering Engine** in `cc-slot-module`.

---

## 🧭 Topic Breakdown & Navigation

1. **[`01_table_engine_7_core_components.md`](./01_table_engine_7_core_components.md)**
   * Orchestration map across the 7 core components: `SlotTableModule`, `TableModuleConfig`, `SlotReelModule`, `SlotSymbolModule`, `SlotSymbolManager`, `SlotSymbolResourceManager`, `SlotTableSoundEffectModule`.
   * Data-to-visual conversion pipeline and runtime choreography.

2. **[`02_matrix_geometry_and_buffer_rows.md`](./02_matrix_geometry_and_buffer_rows.md)**
   * 2D Matrix indexing coordinate math: `[col][row]` layout.
   * Offscreen `topBuffer` and `bottomBuffer` rows preventing visual tearing during high-speed rolling.

3. **[`03_z_index_priority_layer_sorting.md`](./03_z_index_priority_layer_sorting.md)**
   * Symbol visual layering and z-index sorting algorithm (`SlotSymbolManager.sortSymbols()`).
   * Priority hierarchy: Sticky Overlays > Winning Spine Skeletons > Static Idle Symbols > Blur Rolling Sprites.

4. **[`04_mega_symbols_and_irregular_grids.md`](./04_mega_symbols_and_irregular_grids.md)**
   * Handling multi-cell Mega Symbols ($2\times 2$, $3\times 3$), stacked full-reel Wilds ($1\times 3$, $1\times 4$), and irregular Megaways table geometries.

5. **[`05_symbol_pooling_and_gc_optimization.md`](./05_symbol_pooling_and_gc_optimization.md)**
   * High-performance pooling via `SlotCustomNodePool` and `cc.NodePool`.
   * Zero-allocation recycling during spins to eliminate Garbage Collection (GC) pauses on low-end mobile hardware.
