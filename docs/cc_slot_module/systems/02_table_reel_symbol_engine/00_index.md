---
id: "cc_slot_module:systems:table_engine:index"
title: "Table, Reels & Symbol Engine Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "reels", "symbols", "index"]
---

# 🎰 Table, Reels & Symbol Engine Architecture Index

Chào mừng bạn đến với chuyên đề chuyên sâu về **Cỗ máy Bảng quay, Cột và Biểu tượng (Table, Reels & Symbol Rendering Engine)** trong `cc-slot-module`.

---

## 🧭 Danh mục Tài liệu Chuyên Đề:

1. **[`01_table_engine_7_core_components.md`](./01_table_engine_7_core_components.md)**
   * Bản đồ phối hợp 7 hợp phần: Table, Config, Reel, Symbol, Pool, Resource, Sound.
2. **[`02_matrix_geometry_and_buffer_rows.md`](./02_matrix_geometry_and_buffer_rows.md)**
   * Hệ tọa độ `[col][row]`, vùng đệm ẩn `topBuffer` / `bottomBuffer` chống giật hình.
3. **[`03_z_index_priority_layer_sorting.md`](./03_z_index_priority_layer_sorting.md)**
   * Thuật toán phân lớp hiển thị `SlotSymbolManager.sortSymbols()` (Sticky > Win Animating > Static Idle).
4. **[`04_mega_symbols_and_irregular_grids.md`](./04_mega_symbols_and_irregular_grids.md)**
   * Kỹ thuật xử lý Symbol khổng lồ (2x2, 3x3), Wild dài (1x3), và bảng không đối xứng Ways-to-Win.
5. **[`05_symbol_pooling_and_gc_optimization.md`](./05_symbol_pooling_and_gc_optimization.md)**
   * Cơ chế Node Pool (`SlotCustomNodePool`), tái sử dụng Node và chống tụt FPS do Garbage Collector trên Mobile.
