---
id: "cc_slot_module:CascadeModuleConfig:gotchas:index"
title: "CascadeModuleConfig Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ CascadeModuleConfig Gotchas & Engine Defects Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_cached_symbol_indexes_mutation`](./01_cached_symbol_indexes_mutation.md)** | Stale `_symbolIndexes` on Dynamic Grid Format Changes | MEDIUM | If `CASCADE_TABLE_CONFIG.format` changes dynamically at runtime, `SYMBOL_INDEXES` remains cached with the initial format unless `_symbolIndexes` is explicitly nulled. |
| **[`02_uninitialized_positions_array_access`](./02_uninitialized_positions_array_access.md)** | Uninitialized `positions` Array Access in `onLoad` | MEDIUM | `positions` is empty until `VerticalCascadeModule.initLayout()` runs; reading it early results in `undefined`. |
