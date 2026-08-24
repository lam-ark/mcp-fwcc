---
id: "cc_slot_module:systems:table_engine:index"
title: "Table, Reels & Symbol Engine Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "reels", "symbols", "matrix", "index", "flow", "module_linkage"]
---

# 🎰 Table, Reels & Symbol Engine Architecture Index

Welcome to the technical guide on the **Table, Reels & Symbol Rendering Engine** in `cc-slot-module`.

---

## 🧭 Topic Breakdown & Navigation

1. **[`01_table_engine_7_core_components.md`](./01_table_engine_7_core_components.md)**
   * Complete architecture map of the 7 core components in the Table Engine.
   * Inter-module linkage and data/event pathways.

2. **[`02_2d_matrix_coordinates_and_buffer_rows.md`](./02_2d_matrix_coordinates_and_buffer_rows.md)**
   * Mathematical coordinate spaces: Normalized 1D server flat lists vs. 2D column-major visual grids `[col][row]`.
   * Buffer boundaries (`BUFFER_TOP`, `BUFFER_BOT`) for seamless continuous reel scrolling.

3. **[`03_z_index_priority_layer_sorting.md`](./03_z_index_priority_layer_sorting.md)**
   * Hierarchical Z-index sorting rules: Background ➔ Standard Symbols ➔ Wild Overlays ➔ Scatter Teasers ➔ Winning Payline Highlights.

4. **[`04_mega_symbols_and_irregular_grids.md`](./04_mega_symbols_and_irregular_grids.md)**
   * Multi-cell composite symbols ($1\times 2$, $1\times 3$, $2\times 2$, $3\times 3$) and non-uniform irregular column heights.

5. **[`05_zero_allocation_pooling_and_lifecycle.md`](./05_zero_allocation_pooling_and_lifecycle.md)**
   * High-performance `cc.NodePool` lifecycle in `SlotSymbolManager`: Zero GC pressure, memory footprint stability, and safe Spine disposal.

6. **[`06_reel_physics_easing_and_near_win_anticipation.md`](./06_reel_physics_easing_and_near_win_anticipation.md)**
   * Mathematical modeling of reel physics: Constant-speed roll, two-phase `easeBackOut` bounce landing, and dynamic anticipation timing delays.

7. **[`07_table_core_quad_interaction_matrix.md`](./07_table_core_quad_interaction_matrix.md)**
   * The Table Core Quad: Detailed interaction matrix and runtime data flow between `SlotTableModule` (View), `SlotTableData` (Data), `TableModuleConfig` (Config), and `SlotSymbolManager` (Pool).
