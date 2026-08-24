---
id: "cc_slot_module:SlotTableModule:gotchas:index"
title: "SlotTableModule Gotchas Index"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotTableModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_async_stop_promise_hanging_on_reel_count`](./01_async_stop_promise_hanging_on_reel_count.md)** | `stopSpin()` Promise never resolves; spin loop freezes indefinitely. | An unhandled exception inside `onReelStop()` prevents `reelCount` from reaching `reels.length`. | 🔴 Critical (Total Freeze) |
| **[`02_missing_table_module_config_component`](./02_missing_table_module_config_component.md)** | Table node stays completely empty; warning `Config not add to this node`. | `TableModuleConfig` is missing on the table node, resulting in `TOTAL_COLS` and `SYMBOL_WIDTH` being `NaN`. | 🔴 Critical (Empty Table) |
| **[`03_symbol_manager_pooling_race_condition`](./03_symbol_manager_pooling_race_condition.md)** | Symbols glitch, clone, or disappear upon reconnection while win lines are looping. | `removeAllSymbols()` reclaims pooled nodes while payline modules still hold active visual references. | 🟡 High (Visual Artifact) |
