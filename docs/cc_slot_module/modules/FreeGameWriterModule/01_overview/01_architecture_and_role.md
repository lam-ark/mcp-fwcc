---
id: "cc_slot_module:FreeGameWriterModule:overview:architecture_and_role"
title: "FreeGameWriterModule Free Spins Script Generator Architecture"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "overview", "architecture", "makeScript", "total_win"]
---

# 🏛️ FreeGameWriterModule Free Spins Script Generator Architecture

## 1. Executive Summary & Purpose

`FreeGameWriterModule` (`assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameWriterModule.ts`) is the **Declarative Action Script Generator for Free Spins**.

Extending `GameModeWriterModule`, it compiles the step pipeline for automated free spin rounds. It coordinates countdown counter decrements (`makeScriptFreeSpinTrigger`) and evaluates `freeGameRemain` during round settlements to choose between scheduling the next free spin or launching the `TOTAL_WIN` summary celebration (`getFreeGameEndScript`).

```mermaid
graph LR
    Director[FreeGameDirectorModule] -->|runAction 'ShowResultFinal'| Exec[ScriptExecutor]
    Exec -->|makeScriptShowResultFinal| Writer[FreeGameWriterModule]
    
    Writer --> Check{freeGameRemain > 0?}
    Check -->|Yes| S1["getFreeGameRemainScript():<br/>[_updateSpinTimes]"]
    Check -->|No| S2["getFreeGameEndScript():<br/>[_showUnskippedCutscene TOTAL_WIN, _gameExit]"]
```

---

## 2. Core Responsibilities

1. **Free Spin Preparation (`makeScriptFreeSpinTrigger`)**: Compiles `_beforeSpinStart`, `_syncPlaySessionData`, `_resetOnSpin`, `_resetTable`, and `_decreaseFreeGameSpinTimes`.
2. **Conditional Settlement Branching (`makeScriptShowResultFinal`)**: Evaluates whether additional free spins remain or if the feature should terminate.
3. **Session Reconnection Pipeline (`makeScriptResumeGameMode`)**: Compiles `_resumeFreeTable` and `_resumeWinAmount`.
