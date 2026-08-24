---
id: "cc_slot_module:BonusGameDirectorModule:overview:architecture_and_role"
title: "BonusGameDirectorModule Interactive Pick Feature Architecture"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "overview", "architecture", "pick_game", "countdown", "auto_play"]
---

# 🏛️ BonusGameDirectorModule Interactive Pick Feature Architecture

## 1. Executive Summary & Purpose

`BonusGameDirectorModule` (`assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameDirectorModule.ts`) is the **Interactive Pick-and-Click / Mini-Game Director** in the `cc-common` Slot SDK.

Extending `GameModeDirectorModule`, it manages the interactive player selection flow in Bonus Game features (`GAME_MODE_ENUM.BONUS_GAME`). It coordinates countdown timers (`defaultCountDown = 15s`), triggers automatic selection on timeout (`AUTO_PLAY_BONUS_GAME`), validates against duplicate box picks (`openedBoxes`), reveals individual item rewards, uncovers remaining items on game completion, and launches final Jackpot or Total Win celebrations.

```mermaid
graph TD
    Enter[transitionGameMode 4] --> BDir[BonusGameDirectorModule<br/>Canvas/Director/GameMode/BonusGame]
    
    subgraph Interactive Pick Loop
        BDir --> Timer[Countdown Timer: defaultCountDown 15s]
        BDir --> Click[Player Clicks Item: onClickItem]
        Click --> Block[blockBonusGame: Prevent Double-Clicks]
        Click --> Req[GameLogic: SEND_BONUS_GAME_REQUEST]
        Req --> Rec[Server Returns Pick Value]
        Rec --> Open[_openItem / _openFinalItem]
    end

    subgraph Bonus Game Completion
        Open --> Check{nextMode === BONUS_GAME?}
        Check -->|Yes: More Picks| Unblock[_unblockBonusGame & Restart Timer]
        Check -->|No: Bonus Finished| All[_openAllItems & _playFinalResultEffect]
    end
```

---

## 2. Core Responsibilities

1. **Interactive Click & Validation Handling (`onClickItem`)**: Intercepts `CLICK_ITEM`, records picked IDs in `openedBoxes`, blocks further clicks during network transit, and emits `SEND_BONUS_GAME_REQUEST`.
2. **Auto-Pick Timeout Management (`startCountDown`, `_runAutoTrigger`)**: Decrements countdown timer every 1s; fires `AUTO_PLAY_BONUS_GAME` when timer reaches 0.
3. **Progressive Item Unveiling (`_openItem`, `_openFinalItem`, `_openAllItems`)**: Emits scoped events to animate individual treasure chest / vase openings and reveal unselected items at the end.
4. **Session Reconnection State Recovery (`_resumeOpenedBoxes`)**: Restores previously opened item states upon reconnection.
