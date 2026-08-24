---
id: "cc_slot_module:GameModeWriterModule:game_flow:spin_phase_breakdown"
title: "GameModeWriterModule Spin Pipeline Phasing"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 GameModeWriterModule Spin Pipeline Phasing

## 1. Declarative Phasing Pipeline

Every action triggered by the director maps to a dedicated generator method on `GameModeWriterModule`:

| Action Trigger | Generator Method | Emitted Commands |
| :--- | :--- | :--- |
| **`StartSpinning`** | `makeScriptStartSpinning()` | `_startSpinningTable` |
| **`PreStopSpinningTable`** | `makeScriptPreStopSpinningTable()` | `_syncJackpot`, `_playSureWinEffect`, `_playPreStopSpinningEffect` |
| **`StopSpinningTable`** | `makeScriptStopSpinningTable()` | `_stopSpinningTable`, `_setUpPaylines` |
| **`StartRespinning`** | `makeScriptStartRespinning()` | `_beforeReSpinStart`, `_showStartRespinEffect`, `_startRespinningTable` |
| **`StopRespinningTable`** | `makeScriptStopRespinningTable()` | `_showRespinResultEntry`, `_stopRespinningTable`, `_setUpPaylines`, `_showRespinResultFinal` |
| **`ShowResultEntry`** | `makeScriptShowResultEntry()` | `_playJackpotWin`, `_showResultEntry`, `_showTransitionGameMode` |
| **`StopCurrentGameMode`** | `makeScriptStopCurrentGameMode()` | `_stopCurrentGameMode`, `_forceResetGameMode` |
