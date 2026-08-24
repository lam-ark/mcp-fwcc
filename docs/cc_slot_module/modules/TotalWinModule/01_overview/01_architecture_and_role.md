---
id: "cc_slot_module:TotalWinModule:overview:architecture_and_role"
title: "TotalWinModule Architectural Role & Summary Settlement"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "overview", "architecture", "free_spins_recap"]
---

# 🏛️ TotalWinModule Architectural Role & Summary Settlement

---

## 1. Architectural Mission

`TotalWinModule` presents the aggregate score recap modal upon completing Free Spins or feature mini-games. Extending `BaseCutscene`, it ingests accumulated round profits from `content.winAmount` or `dataStore.getWinAmountPS()`, drives a rolling count-up (`MoneyTween.runNumber`), manages gold coin particles (`CoinsEffect`), and enables single-tap instant acceleration.

```mermaid
graph TD
    Writer[FreeGameWriterModule / MiniGameDirector] -->|PLAY_CUTSCENE: TOTAL_WIN| CC[CutsceneController]
    CC --> TWM[TotalWinModule]
    TWM --> DataStore[Reads dataStore.getWinAmountPS()]
    TWM -->|enter()| Tween[MoneyTween.runNumber(animDuration: 10s)]
    
    alt Player Tap
        Player[User Tap] -->|onClick()| Skip[Runs 1s accelerated MoneyTween]
    else Natural Count Completion
        Tween --> Finish[finish() -> Formats Final Sum -> hideTime -> exit()]
    end
```

---

## 2. Key Responsibilities

1. **Dual Source Win Aggregation (`getTotalWinAmount`)**:
   - Safely parses `content.winAmount` with defensive fallback to `this.dataStore.getWinAmountPS()`.
2. **Smooth Tap-to-Fast-Forward (`onClick`)**:
   - Stops the 10s rolling tween and launches an accelerated 1s count to conclusion.
3. **Modal Cleanup (`onDestroy`)**:
   - Cleanly aborts active money tweens and node actions during mode exit.
