---
id: "cc_slot_module:TableModuleConfig:gotchas:index"
title: "TableModuleConfig Gotchas Index"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ TableModuleConfig Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_table_format_mismatch_with_symbol_indexes`](./01_table_format_mismatch_with_symbol_indexes.md)** | Paylines blink wrong symbols or throw out-of-bounds errors on expanding reels. | `TABLE_FORMAT` mutated at runtime without invalidating `_symbolIndexes` cache. | 🔴 Critical (Corrupted Win Highlights) |
| **[`02_missing_buffer_rows_mega_symbols_pop`](./02_missing_buffer_rows_mega_symbols_pop.md)** | 2x2 or 3x3 Mega Symbols pop in/out abruptly at table edges during reel spinning. | `BUFFER_TOP` / `BUFFER_BOT` set to `1` instead of `2` or `3`. | 🟡 High (Visual Popping) |
