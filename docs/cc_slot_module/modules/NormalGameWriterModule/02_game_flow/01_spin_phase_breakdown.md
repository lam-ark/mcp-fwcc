---
id: "cc_slot_module:NormalGameWriterModule:game_flow:spin_phase_breakdown"
title: "NormalGameWriterModule Declarative Script Flow Breakdown"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "game_flow", "spin_phases", "makeScript"]
---

# 🌀 NormalGameWriterModule Declarative Script Flow Breakdown

## 1. The Script Compilation Pipeline

`NormalGameWriterModule` (`assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameWriterModule.ts`) is the **synchronous screenplay compiler** for Base Game spins.

When the director requests an action, `NormalGameWriterModule` builds and returns an array of declarative command descriptors:

```mermaid
graph TD
    subgraph Writer Generator Methods
        M1[makeScriptNormalSpinTrigger] --> A1["[_beforeSpinStart, _syncPlaySessionData, _pauseWallet, _resetOnSpin, _clearWinAmount, _resetTable]"]
        M2[makeScriptStartSpinning] --> A2["[_startSpinningTable]"]
        M3[makeScriptPreStopSpinningTable] --> A3["[_syncJackpot, _playSureWinEffect, _playPreStopSpinningEffect]"]
        M4[makeScriptStopSpinningTable] --> A4["[_stopSpinningTable, _setUpPaylines]"]
        M5[makeScriptPreResumeGameMode] --> A5["[_pauseWallet, _resumeNormalTable, _setUpPaylines, _resumeWinAmount]"]
        M6[makeScriptResumeNormalGame] --> A6["[_showAllPaylines]"]
        M7[makeScriptShowResultFinal] --> A7["[_resumeWallet]"]
    end
```

---

## 2. In-Depth Generator Method Breakdown

| Writer Method | Input Data | Generated Command Array | Purpose & Engine Coordination |
| :--- | :--- | :--- | :--- |
| **`makeScriptNormalSpinTrigger()`** | None | `[_beforeSpinStart, _syncPlaySessionData, _pauseWallet, _resetOnSpin, _clearWinAmount, _resetTable]` | Prepares clean canvas for new spin; freezes wallet; fades out old win numbers. |
| **`makeScriptStartSpinning()`** | None | `[_startSpinningTable]` | Signals table columns to begin spinning. |
| **`makeScriptPreStopSpinningTable()`**| `data` | `[_syncJackpot, _playSureWinEffect, _playPreStopSpinningEffect]` | Runs anticipation teasers and jackpot updates before landing. |
| **`makeScriptStopSpinningTable(data)`**| `data` | `[_stopSpinningTable, _setUpPaylines]` | Decelerates columns with landing matrix and maps win lines. |
| **`makeScriptPreResumeGameMode()`** | `data` | `[_pauseWallet, _resumeNormalTable, _setUpPaylines, _resumeWinAmount]` | Restores matrix and paylines when reconnecting to an active round. |
| **`makeScriptResumeNormalGame()`** | None | `[_showAllPaylines]` | Highlights winning paylines after returning from feature modes. |
| **`makeScriptShowResultFinal()`** | None | `[_resumeWallet]` | Unfreezes wallet to commit payouts to player balance. |
