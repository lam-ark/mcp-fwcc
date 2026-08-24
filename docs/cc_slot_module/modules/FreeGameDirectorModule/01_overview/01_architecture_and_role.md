---
id: "cc_slot_module:FreeGameDirectorModule:overview:architecture_and_role"
title: "FreeGameDirectorModule Free Spins Autonomous Orchestrator Architecture"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "overview", "architecture", "free_spins", "orchestrator"]
---

# 🏛️ FreeGameDirectorModule Free Spins Autonomous Orchestrator Architecture

## 1. Executive Summary & Purpose

`FreeGameDirectorModule` (`assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameDirectorModule.ts`) is the **Autonomous Feature Orchestrator** for Free Spins rounds in the `cc-common` Slot SDK.

Extending `GameModeDirectorModule`, it manages the entire free spin feature lifecycle:
1. Entering Free Spins mode, playing feature BGM, and initializing the remaining spin badge (`freeSpinTimes`).
2. Syncing the visual table from Normal Game to Free Game reels (`syncNormalTable`, `_resumeFreeTable`).
3. Running continuous, uninhibited auto-spins driven by server session data (`isFirstAutoSpin`, `_beforeSpinStart`).
4. Decrementing remaining spins immediately upon spin launch (`_decreaseFreeGameSpinTimes`).
5. Accumulating free spin winnings (`_showWinPayline`).
6. Concluding the feature and transitioning back to Base Game (`_gameExit`).

```mermaid
graph TD
    NormalDir[NormalGameDirectorModule] -->|SWITCH_GAME_MODE: FREE_GAME| FreeDir[FreeGameDirectorModule]
    
    subgraph Free Spins Orchestration
        FreeDir -->|enter| Sync["syncSpinTimes() & syncNormalTable()"]
        FreeDir -->|onBeforeSpinStart| SpinTrigger["runAction('FreeSpinTrigger')"]
        SpinTrigger --> Decrement["_decreaseFreeGameSpinTimes: freeSpinTimes--"]
        
        FreeDir --> SpinTable["_startSpinningTable ➔ _stopSpinningTable"]
        SpinTable --> WinEval["_showWinPayline: Accumulate winAmountPS"]
        
        WinEval --> CheckRemain{freeGameRemain > 0?}
        CheckRemain -->|Yes| NextAutoSpin["delayAutoSpin() ➔ Next Spin"]
        CheckRemain -->|No| Exit["_gameExit: TOTAL_WIN Dialog ➔ Return to Normal Game"]
    end

    NextAutoSpin --> SpinTrigger
    Exit -->|EXIT_GAME_MODE| NormalDir
```

---

## 2. Core Responsibilities

1. **Feature Entry & Spin Badge Initialization (`enter`, `syncSpinTimes`)**: Extracts `freeGameRemain` or initial `freeGame` count from `dataStore.playSession`, updates `dataStore.freeSpinTimes`, and updates the HUD badge node via `UPDATE_SPINTIMES`.
2. **Table Reel Synchronization (`syncNormalTable`, `_resumeFreeTable`)**: Emits `SYNC_TABLE` to switch symbols to the Free Spins theme reels or restore matrix state upon reconnection.
3. **Continuous Auto-Spin Loop Orchestration (`_beforeSpinStart`, `delayAutoSpin`)**: Handles auto-spin pacing, skipping delays on initial enter (`isFirstAutoSpin`), and ensuring snappy flow between free spins.
4. **Immediate Badge Decrement (`_decreaseFreeGameSpinTimes`)**: Decrements `freeSpinTimes` locally as soon as reels start moving to give instant player feedback.
5. **Accumulated Free Spins Payout Display (`_showWinPayline`)**: Overrides base payline behavior to display the cumulative session win (`winAmountPS`) rather than isolated line win amounts.
6. **Graceful Feature Teardown (`_gameExit`)**: Clears active payline tracks, resets table matrices, and returns engine control to `NormalGameDirectorModule`.
