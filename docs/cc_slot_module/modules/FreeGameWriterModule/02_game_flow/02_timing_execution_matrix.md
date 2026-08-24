---
id: "cc_slot_module:FreeGameWriterModule:game_flow:timing_execution_matrix"
title: "FreeGameWriterModule Timing & Script Synthesis Matrix"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ FreeGameWriterModule Timing & Script Synthesis Matrix

## 1. Script Synthesis Matrix

| Script Generator Method | Commands Injected | Execution Duration |
| :--- | :--- | :--- |
| **`makeScriptResumeGameMode()`** | `_resumeFreeTable`, `_resumeWinAmount` | Instant (< 0.05ms) |
| **`makeScriptFreeSpinTrigger()`** | `_beforeSpinStart`, `_syncPlaySessionData`, `_resetOnSpin`, `_resetTable`, `_decreaseFreeGameSpinTimes` | Instant (< 0.05ms) |
| **`makeScriptShowResultFinal()`** | `_updateSpinTimes` OR `_showUnskippedCutscene(TOTAL_WIN)`, `_gameExit` | Instant (< 0.05ms) |
