---
id: "cc_slot_module:GameDataStore:gotchas:index"
title: "GameDataStore Gotchas Index"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ GameDataStore Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_object_reference_mutation_deep_clone_fix`](./01_object_reference_mutation_deep_clone_fix.md)** | UI modifications to matrix arrays corrupt data for other modules. | Downstream modules mutating objects by reference instead of relying on deep-clone isolation. | 🔴 Critical (State Corruption) |
| **[`02_compressed_server_key_mismatch_without_mapNewKeys`](./02_compressed_server_key_mismatch_without_mapNewKeys.md)** | Subclasses expecting standard keys (e.g. `winAmount`) receive undefined values from compressed backend packets. | Failure to override `parseDataPS()` and call `mapNewKeys()` to rename short tokens (`cna`). | 🔴 Critical (Silent Data Loss) |
| **[`03_win_level_threshold_defaults_without_game_config`](./03_win_level_threshold_defaults_without_game_config.md)** | Win level thresholds default to 1x/5x/10x instead of game-specific paytable math. | `GameDataStore.setConfig()` not called during bootstrap. | 🟡 High (Wrong Celebration Tier) |
