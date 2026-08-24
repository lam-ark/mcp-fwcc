---
id: "cc_slot_module:GameDataStore:director_writer:pipeline_orchestration"
title: "GameDataStore Integration with Directors and Writers"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 GameDataStore Integration with Directors and Writers

## 1. Pipeline Integration Points

1. **State Ingestion Phase**: Director calls `dataStore.parseDataPS(data)` and `dataStore.updateDataModules()` at the start of `onStateUpdate()` or `onStateResume()`.
2. **Writer Script Synthesis Phase**: Writers (`NormalGameWriterModule`, `FreeGameWriterModule`, `BonusGameWriterModule`) inject `this.dataStore` to inspect `dataStore.playSession.freeGameRemain`, `dataStore.playSession.isBigWin`, or `dataStore.playSession.jackpot` to dynamically generate conditional action script queues.
3. **Execution Phase**: Directors query helper methods (`getBigWinData()`, `getJackpotInfo()`, `getWinAmountInfo()`) to feed exact parameters into Cutscene UI dialogs.
