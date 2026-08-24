---
id: "cc_slot_module:BonusGameWriterModule:game_flow:timing_execution_matrix"
title: "BonusGameWriterModule Script Timing Execution Matrix"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BonusGameWriterModule Script Timing Execution Matrix

## 1. Script Generation vs Execution Timing

| Writer Method | Generator Execution Time | Emitted Script Commands | Async Execution Duration in Director |
| :--- | :--- | :--- | :--- |
| **`makeScriptResumeGameMode()`** | `0ms` (Pure Array Allocation) | `_blockBonusGame`, `_resumeOpenedBoxes`, `_unblockBonusGame`, `_startCountDown` | Synchronous state restoration + 15s timer |
| **`makeScriptShowResultEntry()`** | `0ms` (Pure Array Allocation) | `_syncJackpot`, `_unblockBonusGame`, `_startCountDown`, `_openItem` | ~1.0s (Item reveal animation + score count-up) |
| **`makeScriptShowResultFinal()`** | `0ms` (Pure Array Allocation) | `_stopCountDown`, `_openFinalItem`, `_openAllItems`, `_playFinalResultEffect`, `_clearCurrentBonusGameData` | ~4.0s - 7.0s (Final item open + 3.0s unpicked reveal + Total Win modal) |
