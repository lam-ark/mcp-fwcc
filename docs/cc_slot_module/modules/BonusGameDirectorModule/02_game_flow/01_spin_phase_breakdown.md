---
id: "cc_slot_module:BonusGameDirectorModule:game_flow:spin_phase_breakdown"
title: "BonusGameDirectorModule Interactive Pick Phase Breakdown"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "game_flow", "pick_phases"]
---

# 🌀 BonusGameDirectorModule Interactive Pick Phase Breakdown

## 1. Pick-and-Click Flow Lifecycle

`BonusGameDirectorModule` coordinates player picks through a 4-phase interactive loop:

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Dir as BonusGameDirectorModule
    participant Table as BonusGameTableModule
    participant GL as eno.GameLogic
    participant Cutscenes as CutsceneManager

    Note over Dir,Cutscenes: Phase 1: Mode Entry & Countdown Start
    Dir->>Dir: enter() -> initBonusGame() & startBonusGame()
    Dir->>Table: Emits INIT_BONUS_GAME & START_BONUS_GAME
    Dir->>Dir: startCountDown() [15s Repeating Tween]

    Note over Dir,Cutscenes: Phase 2: Player Selection & Input Lock
    alt Manual Pick
        Player->>Dir: CLICK_ITEM (itemId)
        Dir->>Dir: stopCountDown() & blockBonusGame()
    else 15s Timeout
        Dir->>Dir: _runAutoTrigger() -> Emits AUTO_PLAY_BONUS_GAME
        Table->>Dir: Simulated CLICK_ITEM (random unopened item)
    end
    Dir->>GL: SEND_BONUS_GAME_REQUEST (itemId)

    Note over Dir,Cutscenes: Phase 3: Result Ingestion & Item Reveal
    GL-->>Dir: Returns Pick Payload (bonusValue, nextMode)
    Dir->>Table: Emits OPEN_ITEM (itemId, bonusValue)

    Note over Dir,Cutscenes: Phase 4: Continuation vs Terminal Reveal
    alt More Picks Remain (nextMode === BONUS_GAME)
        Dir->>Dir: unblockBonusGame() & startCountDown()
        Note over Player,Cutscenes: Repeats to Phase 2 for next pick
    else Bonus Completed (nextMode !== BONUS_GAME)
        Dir->>Table: Emits OPEN_FINAL_ITEM & OPEN_ALL_ITEMS (Uncovered Dimmed)
        Dir->>Cutscenes: Plays TOTAL_WIN / JACKPOT_WIN celebration
        Dir->>Dir: exitGameMode() -> Emits RESET_BONUS_GAME
    end
```
