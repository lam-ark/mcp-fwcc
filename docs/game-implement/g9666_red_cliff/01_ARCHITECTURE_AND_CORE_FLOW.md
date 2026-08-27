---
id: "game-implement:9666:architecture:core_flow"
title: "Red Cliff (g9666) Lifecycle Architecture & Master Flow"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "g9666", "red_cliff", "architecture", "lifecycle", "state_machine"]
---

# 🔄 Red Cliff (g9666) Lifecycle Architecture & Master Flow

---

## 1. Master Finite State Machine (FSM)

```mermaid
stateDiagram-v2
    [*] --> READY: Initial Scene Load
    READY --> SPINNING: onSpinClick / AutoSpin
    SPINNING --> STOPPING: Network Response Received
    STOPPING --> WIN_EVALUATION: All Reels Settled (TABLE_STOP_SPIN)
    
    state WIN_EVALUATION {
        [*] --> CheckWins
        CheckWins --> HighlightPaylines: Winning Ways Found
        CheckWins --> CheckFreeGameTrigger: Zero Wins
        HighlightPaylines --> CollectWildMultipliers: Has Multiplier Wilds
        CollectWildMultipliers --> DualCascadeDrop: CompositeCascade9666
        DualCascadeDrop --> ReIndexMatrix: Update Format & Megaways
        ReIndexMatrix --> CheckWins: Loop Next Cascade Step
    }

    WIN_EVALUATION --> SETTLED: Cascade Loop Complete & Zero Wins
    SETTLED --> FREE_GAME_OPTION: 4+ Scatters Landed
    FREE_GAME_OPTION --> FREE_GAME_LOOP: Option Selected
    FREE_GAME_LOOP --> READY: Free Spins Complete
    SETTLED --> READY: Normal Round Complete
```

---

## 2. Spin Start Sequence & State Reset Pipeline

When a new spin initiates, the following sequential commands execute:
1. **`onBeforeSpinStart`** $\rightarrow$ Locks bet buttons, cancels pending win animations.
2. **`_resetTable`** $\rightarrow$ Emits:
   - `BEFORE_RESET_TABLE`
   - `CLEAR_PAYLINES`
   - `SYNC_TABLE`
   - `RESET_MULTIPLIER` (resets multiplier banner to baseline $\times 1$ in Base Game or active sticky in Free Game)
   - `RESET_SCATTER_COUNT`
3. **Symbol Reversion**: Multiplier Wilds that did not explode in previous cascades reset `hasCollectedMultiplier = false` and re-show their multiplier badge.
