---
id: "cc_slot_module:GameDataStore:director_writer:subsystem_impacts"
title: "GameDataStore Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 GameDataStore Subsystem Impact Matrix

## 1. Subsystems Cross-Reference

| Consumer Subsystem | Method / Property Accessed | Purpose |
| :--- | :--- | :--- |
| **`BaseGameDirector`** | `playSession`, `currentGameMode`, `gameSpeed` | Controls spin lifecycle and mode transitions. |
| **`GameModeWriterModules`**| `isBigWin()`, `getNextGameMode()`, `getJackpotInfo()` | Synthesizes command script steps. |
| **`BaseDataModules`** | `registerModule()`, `updateDataModules()` | Receives deep-cloned slice updates for registered keys. |
| **`WinAmountModule`** | `getWinAmountInfo()`, `getWinLevel()` | Determines duration of money counting sound and numbers. |
| **`CutsceneModule`** | `getBigWinData()`, `getJackpotInfo()` | Supplies animation data for win popups. |
