---
id: "cc_slot_module:SlotGameSettings:overview:architecture_and_role"
title: "SlotGameSettings Runtime Preferences & State Coordination Architecture"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "overview", "architecture", "preferences", "turbo", "fast_to_result", "game_state"]
---

# 🏛️ SlotGameSettings Runtime Preferences & State Coordination Architecture

## 1. Executive Summary & Purpose

`SlotGameSettings` (`assets/cc-common/cc-slot-module/Core/SlotGameSettings.ts`) is the **Global Runtime Preferences & Game State Registry** in the `cc-common` Slot SDK.

Instantiated and registered into the IoC container by `GameInit`, `SlotGameSettings` acts as the single source of truth for **Turbo Mode** (`isTurboActive`), **Fast-To-Result (FTR)** (`isFastToResult`), **Auto-Spin** (`isAutoSpin`), **Trial Mode** (`isTrialMode`), and the overarching **State Machine Phase** (`currentGameState`).

```mermaid
graph TD
    SGS[SlotGameSettings<br/>Global State Singleton]

    subgraph State Mutation Sources
        TurboBtn[TurboButton / Switcher] -->|set isTurboActive / gameSpeed| SGS
        AutoPanel[AutoSpinPanel] -->|set isAutoSpin| SGS
        Director[GameDirector] -->|set currentGameState| SGS
        NetInit[GameInit.setUpGame] -->|set isJoinGameSuccess| SGS
        TrialBtn[TrialModeButton] -->|set isTrialMode| SGS
    end

    subgraph Downstream Consumers
        SGS -->|isFastToResult / gameSpeed| ScriptExec[ScriptExecutor & Directors]
        SGS -->|isTurboActive| TableModule[SlotTableModule<br/>Short Reel Spin Tweens]
        SGS -->|currentGameState| SpinButton[SlotButtonNormal & UI Buttons]
        SGS -->|isTrialMode| Wallet[WalletModule & Trial Badges]
        SGS -->|isFastToResult| FX[Payline & NearWin Refill Modules]
    end
```

---

## 2. Core Responsibilities

1. **Turbo & FTR Speed Regulation**: Provides `gameSpeed` (`NORMAL`, `TURBO`, `INSTANTLY`) and computed `isFastToResult` to bypass or shorten tween durations.
2. **State Machine Phase Broadcasting**: Stores `currentGameState` (`IDLE`, `SPINNING`, `WIN_EFFECT`, `TRANSITION`) enabling UI controls to dynamically lock/unlock.
3. **Session Context Integrity**: Holds `isJoinGameSuccess` to ensure player interaction is barred until the socket auth handshake finishes.
4. **Auto-Spin Loop Continuity**: Retains `isAutoSpin` flag so directors know to re-trigger spin sequences upon settlement.
