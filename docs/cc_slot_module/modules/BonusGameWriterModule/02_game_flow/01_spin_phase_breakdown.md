---
id: "cc_slot_module:BonusGameWriterModule:game_flow:spin_phase_breakdown"
title: "BonusGameWriterModule Script Phase Generation Breakdown"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "game_flow", "script_generation"]
---

# 🌀 BonusGameWriterModule Script Phase Generation Breakdown

## 1. Script Generation Flow

`BonusGameWriterModule` constructs synchronous action script arrays for the three phases of Bonus Game execution:

```mermaid
graph TD
    Resume[Reconnection / Game Load] --> GenResume[makeScriptResumeGameMode: _blockBonusGame -> _resumeOpenedBoxes -> _unblockBonusGame -> _startCountDown]
    
    ServerRes[Server Pick Response Received] --> EntryCheck{nextMode === BONUS_GAME?}
    EntryCheck -->|Yes: More Picks Remain| GenEntry[makeScriptShowResultEntry: _syncJackpot -> _unblockBonusGame -> _startCountDown -> _openItem]
    EntryCheck -->|No: Bonus Complete| GenBlock[makeScriptShowResultEntry: _syncJackpot -> _blockBonusGame]
    
    GenBlock --> FinalStep[makeScriptShowResultFinal: _stopCountDown -> _openFinalItem -> _openAllItems -> _playFinalResultEffect -> _clearCurrentBonusGameData]
```
