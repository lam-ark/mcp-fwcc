---
id: "cc_slot_module:FreeGameDirectorModule:director_writer:pipeline_orchestration"
title: "FreeGameDirectorModule & FreeGameWriterModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 FreeGameDirectorModule & FreeGameWriterModule Pipeline Orchestration

## 1. Action Dispatch Pipeline

1. **`onBeforeSpinStart()`**: Invokes `this.runAction("FreeSpinTrigger")`.
   * Writer generates: `_beforeSpinStart` ➔ `_syncPlaySessionData` ➔ `_resetOnSpin` ➔ `_resetTable` ➔ `_decreaseFreeGameSpinTimes`.
2. **`onStopSpinningTable()`**: Replaces reels with server matrix.
3. **`onShowResultEntry()`**: Evaluates Big Wins or calls `_showWinPayline()`.
4. **`onShowResultFinal()`**: Invokes `this.runAction("ShowResultFinal")`.
   * Writer checks `freeGameRemain`:
     * If $> 0$: `_updateSpinTimes(freeGameRemain)`.
     * If $0$: `_showUnskippedCutscene(TOTAL_WIN)` ➔ `_gameExit()`.
