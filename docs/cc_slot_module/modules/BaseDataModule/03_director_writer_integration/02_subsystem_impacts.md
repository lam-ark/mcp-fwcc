---
id: "cc_slot_module:BaseDataModule:director_writer:subsystem_impacts"
title: "BaseDataModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BaseDataModule Subsystem Impact Matrix

## 1. Subsystems Cross-Reference

| Derived Data Module | Inherits From | Registered Keys | Downstream Consumer |
| :--- | :--- | :--- | :--- |
| **`SlotTableData`** | `BaseDataModule` | `['matrix']` | `SlotTableModule` |
| **`SlotTablePaylineData`** | `BaseDataModule` | `['payLines', 'winAmount']` | `SlotTablePaylineModule` |
| **`CascadeModuleData`** | `BaseDataModule` | `['cascadeMatrix', 'step', 'multiplier']` | `CascadeModule` |
| **`ClusterModuleData`** | `BaseDataModule` | `['clusters', 'removedPositions']` | `ClusterModule` |
| **`WinAmountData`** | `BaseDataModule` | `['winAmount', 'jackpotWin']` | `WinAmountModule` |
