---
id: "cc_slot_module:BonusGameWriterModule:overview:architecture_and_role"
title: "BonusGameWriterModule Interactive Pick Script Generator Architecture"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "overview", "architecture", "makeScript", "pick_game"]
---

# 🏛️ BonusGameWriterModule Interactive Pick Script Generator Architecture

## 1. Executive Summary & Purpose

`BonusGameWriterModule` (`assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameWriterModule.ts`) is the **Declarative Action Script Generator for Interactive Bonus Features**.

Extending `GameModeWriterModule`, it compiles the step pipeline for player pick interactions (`makeScriptShowResultEntry`) and terminal prize revelations (`makeScriptShowResultFinal`). It unblocks chests between picks and triggers the reveal of unselected items (`_openAllItems`) when the bonus concludes.

```mermaid
graph LR
    Director[BonusGameDirectorModule] -->|runAction 'ShowResultEntry'| Exec[ScriptExecutor]
    Exec -->|makeScriptShowResultEntry| Writer[BonusGameWriterModule]
    
    Writer --> Check{nextMode === BONUS_GAME?}
    Check -->|Yes: More Picks Remain| S1["[_syncJackpot, _unblockBonusGame, _startCountDown, _openItem]"]
    Check -->|No: Bonus Finished| S2["[_syncJackpot, _blockBonusGame]"]
```

---

## 2. Core Responsibilities

1. **Pick Step Pipeline (`makeScriptShowResultEntry`)**: Emits `_openItem`, restarts countdown timer, and unblocks player touches.
2. **Feature Finalization Pipeline (`makeScriptShowResultFinal`)**: Compiles `_stopCountDown`, `_openFinalItem`, `_openAllItems`, `_playFinalResultEffect`, and `_clearCurrentBonusGameData`.
3. **Session Reconnection Pipeline (`makeScriptResumeGameMode`)**: Compiles `_blockBonusGame`, `_resumeOpenedBoxes`, `_unblockBonusGame`, and `_startCountDown`.
