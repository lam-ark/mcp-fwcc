---
id: "cc_slot_module:BonusGameDirectorModule:director_writer:pipeline_orchestration"
title: "BonusGameDirectorModule Pipeline Orchestration & Script Delegation"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BonusGameDirectorModule Pipeline Orchestration & Script Delegation

## 1. Pipeline Integration Architecture

`BonusGameDirectorModule` operates in tandem with `BonusGameWriterModule`:
1. **Turn Result Presentation**: When backend data returns, `ScriptExecutor` invokes `BonusGameWriterModule.makeScriptShowResultEntry()`.
2. **Intermediate Reveal**: If `nextMode === BONUS_GAME`, the writer dispatches `_openItem`, `_unblockBonusGame`, and `_startCountDown`.
3. **Terminal Reveal**: If the feature ends, `makeScriptShowResultFinal()` dispatches `_stopCountDown`, `_openFinalItem`, `_openAllItems`, and `_playFinalResultEffect`.
