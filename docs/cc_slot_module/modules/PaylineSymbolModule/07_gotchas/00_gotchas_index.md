---
id: "cc_slot_module:PaylineSymbolModule:gotchas:index"
title: "PaylineSymbolModule Engine Gotchas Index"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineSymbolModule Engine Gotchas Index

---

## 1. Known Gotchas Summary

| Gotcha Document | Symptom | Severity | Engine Subsystem |
| :--- | :--- | :--- | :--- |
| **[`01_z_index_sorting_clipping_glitch.md`](./01_z_index_sorting_clipping_glitch.md)** | Spine win animations clipped by adjacent reel mask boundaries. | `HIGH` | Scene Graph / Rendering |
| **[`02_symbol_parent_mutation_memory_leak.md`](./02_symbol_parent_mutation_memory_leak.md)** | Missing `PAYLINE_CLEAR` leaves orphaned symbol nodes in container on next spin. | `CRITICAL` | Node Pooling |
