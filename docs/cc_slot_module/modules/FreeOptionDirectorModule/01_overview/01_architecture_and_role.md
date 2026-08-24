---
id: "cc_slot_module:FreeOptionDirectorModule:overview:architecture_and_role"
title: "FreeOptionDirectorModule Free Spins Option Choice Modal Architecture"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "overview", "architecture", "free_spins_choice"]
---

# 🏛️ FreeOptionDirectorModule Free Spins Option Choice Modal Architecture

## 1. Executive Summary & Purpose

`FreeOptionDirectorModule` (`assets/cc-common/cc-slot-module/GameMode/FreeOption/FreeOptionDirectorModule.ts`) is the **Free Spins Volatility Selection Director**.

Extending `GameModeDirectorModule`, it presents a multi-choice modal allowing players to choose their preferred Free Spin mode (e.g. 15 Free Spins with 2x multiplier vs 5 Free Spins with 10x multiplier vs Mystery Choice). It enforces a 15-second countdown timer (`countdownTime`), auto-selects an option on timeout, locks user inputs upon selection, and emits `GameLogicUIEvents.SEND_FREE_OPTION_REQUEST` to backend servers.

```mermaid
graph TD
    Trigger[Free Game Triggered with Options] --> Director[FreeOptionDirectorModule]
    Director --> Enter[enter: startCountDown 15s & onEnableOptions true]
    
    subgraph Selection Loop
        Enter --> Choice{Player Choice or Timeout?}
        Choice -->|Player Clicks Button| Manual[optionClick: Disable All Buttons & stopCountDown]
        Choice -->|15s Timeout| Auto[_runAutoTrigger: Random Selection]
        Manual --> Req[GameLogic: SEND_FREE_OPTION_REQUEST selectedOption]
        Auto --> Req
    end

    Req --> Switch[Server Returns Target Mode -> Switch to FreeGame]
```

---

## 2. Core Responsibilities

1. **Multi-Choice Presentation (`onEnableOptions`)**: Configures option buttons defined in the `options: SlotCustomFreeGameOption[]` Inspector array.
2. **Countdown Timer (`startCountDown`)**: Decrements countdown timer every second and updates UI text.
3. **Double-Click Prevention (`optionClick`)**: Immediately disables all option buttons (`interactable = false`) upon first click.
4. **Backend Event Dispatch**: Emits `SEND_FREE_OPTION_REQUEST` with the chosen `optionId`.
