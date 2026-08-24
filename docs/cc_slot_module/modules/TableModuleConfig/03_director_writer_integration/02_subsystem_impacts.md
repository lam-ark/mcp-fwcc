---
id: "cc_slot_module:TableModuleConfig:director_writer:subsystem_impacts"
title: "TableModuleConfig Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 TableModuleConfig Subsystem Impact Matrix

## 1. Subsystems Cross-Reference

| Property / Method | `SlotTableModule` | `SlotReelModule` | `SlotTableNearWinModule` | `SlotTablePaylineModule` |
| :--- | :--- | :--- | :--- | :--- |
| **`TABLE_FORMAT`** | Computes column count & spacing | Sets row symbol count per reel | Determines scatter thresholds | Validates payline bounds |
| **`SYMBOL_INDEXES`**| Coordinate mapping | Maps index to reel row | Locates scatter coordinates | Maps winning line symbols |
| **`MODES`** | Selects mode in `startSpin()` | Controls deceleration curves | None | None |
| **`NEAR_WIN_DELAY_TIME`** | None | Slows down anticipated column | Injects delay into reel stop | None |
