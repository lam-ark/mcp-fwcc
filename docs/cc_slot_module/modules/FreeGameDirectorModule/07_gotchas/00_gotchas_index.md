---
id: "cc_slot_module:FreeGameDirectorModule:gotchas:index"
title: "FreeGameDirectorModule Gotchas Index"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ FreeGameDirectorModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_is_first_auto_spin_delay_bypass`](./01_is_first_auto_spin_delay_bypass.md)** | Awkward 1-second visual freeze between Free Game intro dialog closing and first spin starting. | `isFirstAutoSpin` flag not set to `true` in `enter()`, causing full `delayAutoSpin` execution. | 🟡 Medium (Pacing Lag) |
| **[`02_free_spin_times_desync_on_reconnect`](./02_free_spin_times_desync_on_reconnect.md)** | Reconnecting mid-feature shows full initial spin count (e.g. 10) instead of remaining spins (e.g. 3). | Failing to check `freeGameRemain \|\| freeGame` fallback in `syncSpinTimes()`. | 🔴 Critical (UI State Desync) |
| **[`03_missing_sync_normal_table_matrix_leak`](./03_missing_sync_normal_table_matrix_leak.md)** | Free Game opens with blank reel column nodes or corrupt symbol textures. | Bypassing `syncNormalTable()` upon non-resume `enter()`. | 🔴 Critical (Visual Corruption) |
