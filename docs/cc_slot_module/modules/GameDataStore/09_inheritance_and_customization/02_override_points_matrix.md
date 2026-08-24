---
id: "cc_slot_module:GameDataStore:customization:override_points_matrix"
title: "GameDataStore Extension Points & Override Matrix"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "customization", "override_matrix", "hooks", "extension_points"]
---

# 📊 GameDataStore Extension Points & Override Matrix

## 1. Extension Points Matrix

| Method Name | Base Class Default Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`parseDataPS(data)`** | Stores `this.playSession = data` | `YES (Primary Entry)` | `MANDATORY` | Intercept raw backend packets, perform custom calculations, and trigger `mapDataPS()`. |
| **`mapDataPS(data)`** | Virtual hook returning raw data | `YES` | None (Virtual) | Remap abbreviated server JSON keys into standardized camelCase tokens. |
| **`updateDataModules()`** | Deep-clones and notifies `BaseDataModule` set | `EXTEND_ONLY` | `MANDATORY` | Trigger additional custom event bus notifications after broadcasting to data modules. |
| **`getWinLevel(win?)`** | Evaluates `win / totalBet` against `THRESHOLDS` | `YES` | `OPTIONAL` | Implement custom tier logic (e.g. 5-tier Super Mega Win or scatter-only multipliers). |
| **`getJackpotInfo()`** | Splits string `['9000_4_GRAND;2500000']` | `YES` | `OPTIONAL` | Parse non-standard proprietary jackpot formats from custom backend servers. |
| **`resetDataPS()`** | Resets `winAmountPS = 0` and `isFinished = true` | `YES` | `MANDATORY` | Reset custom feature counters (e.g. sticky wilds, streak counters) between rounds. |
