---
id: "cc_slot_module:GameDataStore:game_flow:timing_execution_matrix"
title: "GameDataStore Execution Performance & Timings Matrix"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ GameDataStore Execution Performance & Timings Matrix

## 1. Timing Benchmarks

| Method Name | Operation Performed | Benchmark | Synchronicity |
| :--- | :--- | :--- | :--- |
| **`parseDataPS(data)`** | Ingests payload and outputs warning log | < 0.05ms | Synchronous |
| **`mapNewKeys(ps, map)`**| In-place key renaming | < 0.02ms for 20 keys | Synchronous |
| **`updateDataModules()`** | Deep-clones objects and updates 10+ modules | < 0.15ms | Synchronous |
| **`getWinLevel(win)`** | Accurate floating division & threshold search | < 0.01ms | Synchronous |
| **`getJackpotInfo()`** | String parsing of jackpot array tokens | < 0.02ms | Synchronous |
