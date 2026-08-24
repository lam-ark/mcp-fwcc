---
id: "cc_slot_module:BaseDataModule:game_flow:timing_execution_matrix"
title: "BaseDataModule State Synchronization Timings"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BaseDataModule State Synchronization Timings

## 1. Timing Matrix

| Lifecycle Point | Action | Overhead | Synchronicity |
| :--- | :--- | :--- | :--- |
| **`onLoad`** | `applyInjections` & bind `baseMode` | < 0.05ms | Synchronous |
| **`start`** | Register to `GameDataStore` | < 0.02ms | Synchronous |
| **`updateDataModules`** | Iterate and invoke `onDataUpdate` | < 0.1ms total across all modules | Synchronous (Zero Frame Drop) |
| **`clearData`** | Reset registered keys to `null` | < 0.01ms | Synchronous |
