---
id: "cc_slot_module:FreeOptionDirectorModule:overview:architecture_and_role"
title: "FreeOptionDirectorModule Interactive Feature Selection Architecture"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "overview", "architecture", "player_choice", "countdown"]
---

# 🏛️ FreeOptionDirectorModule Interactive Feature Selection Architecture

## 1. Executive Summary & Purpose

`FreeOptionDirectorModule` (`assets/cc-common/cc-slot-module/GameMode/FreeOption/FreeOptionDirectorModule.ts`) is the **Interactive Player Choice & Volatility Selection Engine** for the `cc-common` Slot SDK.

When a feature trigger offers branching game modes (e.g. Low Volatility / High Spins vs High Volatility / Low Spins / Random Mystery), `FreeOptionDirectorModule`:
1. Activates option cards and buttons with custom IDs (`SlotCustomFreeGameOption`).
2. Renders localized reminders (`FREE_OPTION_GAME_REMIND`) with a live 15-second countdown timer.
3. Automatically selects a random option (`_runAutoTrigger`) if the player remains inactive.
4. Prevents duplicate requests by disabling all buttons on click and dispatches `SEND_FREE_OPTION_REQUEST` to the server logic handler.

```mermaid
graph TD
    Trigger[Scatter Feature Trigger] --> Switch[SWITCH_GAME_MODE: FREE_OPTION]
    Switch --> Director[FreeOptionDirectorModule: enter]
    
    subgraph Selection Loop & Timer
        Director --> Localize[localizeText: FREE_OPTION_GAME_REMIND]
        Director --> EnableBtns[onEnableOptions: enable cards]
        Director --> StartTimer[startCountDown: 15s Tween Timer]
        
        StartTimer -->|Player clicks card| PlayerClick[optionClick]
        StartTimer -->|Timer hits 0s| AutoPick[_runAutoTrigger: Pick random option]
        AutoPick --> PlayerClick
    end

    PlayerClick --> DisableBtns[onEnableOptions: disable all cards]
    PlayerClick --> StopTimer[stopCountDown]
    PlayerClick --> NetworkReq[GameLogicUIEvents.SEND_FREE_OPTION_REQUEST]
```

---

## 2. Core Responsibilities

1. **Option Card Configuration (`options: SlotCustomFreeGameOption[]`)**: Inspects array of option nodes, attaches string/number `optionId` attributes, and controls interactable button states.
2. **Localized Countdown Display (`updateCountdownText`, `startCountDown`)**: Executes a repeating 1-second `cc.tween` on `countDownText` displaying remaining seconds.
3. **Auto-Trigger Fail-safe (`_runAutoTrigger`)**: Selects an option at random (`Math.random() * options.length`) if player input is not received before timer expiration.
4. **Network Dispatch & Anti-Spam (`optionClick`)**: Disables all option buttons immediately upon touch to prevent race conditions and emits `SEND_FREE_OPTION_REQUEST`.
5. **Clean Timer Teardown (`stopCountDown`, `onDestroy`)**: Automatically halts active tween loops to prevent memory leaks and dangling interval executions.
