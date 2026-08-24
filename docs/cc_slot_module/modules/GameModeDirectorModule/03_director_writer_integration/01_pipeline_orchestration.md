---
id: "cc_slot_module:GameModeDirectorModule:director_writer:pipeline_orchestration"
title: "GameModeDirectorModule Pipeline Orchestration & Subsystem Coordination"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "director_writer", "pipeline", "orchestration", "subsystems"]
---

# 🎼 GameModeDirectorModule Pipeline Orchestration & Subsystem Coordination

## 1. Subsystem Interaction Architecture

`GameModeDirectorModule` sits as the **command coordinator** between high-level game logic and low-level visual subsystems:

```mermaid
graph TD
    Director[GameModeDirectorModule] -->|Local moduleEvent| Subsystems[Child Subsystems in moduleList]
    Director -->|Global eventManager| HUD[Global UI & HUD Overlays]
    Director -->|Direct Call| Audio[SlotSoundPlayerModule]

    subgraph Subsystems in moduleList
        Subsystems --> Table[SlotTableModule: Symbol Grid]
        Subsystems --> Paylines[PaylineModule: Win Line Trails]
        Subsystems --> WinFX[WinEffectModule: Particle Fountains]
    end

    subgraph Global UI & HUD
        HUD --> Wallet[WalletModule: Balance & Credit]
        HUD --> WinLabel[WinAmountModule: Bottom Win Ticker]
        HUD --> Cutscenes[CutsceneModule: Spine Dialogues]
        HUD --> Jackpots[JackpotModule: Progressive Counters]
    end
```

---

## 2. Coordinated Action Step Handlers

| Step Handler Method | Target Subsystem | Invoked Bus Topic | Impact on Game State |
| :--- | :--- | :--- | :--- |
| **`_pauseWallet()`** | Global Wallet | `WALLET.PAUSE_WALLET` | Locks balance display to prevent premature win credit before animations finish. |
| **`_clearWinAmount()`**| Bottom HUD | `WIN_AMOUNT.FADE_OUT_NUMBER` | Clears previous win amount text before new round begins. |
| **`_startSpinningTable()`**| Table Subsystem | `TABLE_START_SPIN` (Scoped) | Initiates reel acceleration. |
| **`_stopSpinningTable(data)`**| Table Subsystem | `TABLE_STOP_SPIN` (Scoped) | Sends target matrix to columns to begin landing sequence. |
| **`_showWinPayline(data)`**| Table & HUD | `SHOW_ALL_PAYLINES`, `WIN_AMOUNT.UPDATE_WIN_AMOUNT` | Renders payline outlines and increments win counter. |
| **`_resumeWallet(force)`**| Global Wallet | `WALLET.RESUME_WALLET` | Rolls total win amount into player wallet balance. |
| **`_syncJackpot()`** | Jackpot Ticker | `JACKPOT.UPDATE_JACKPOT_VALUE`, `PAUSE_JACKPOT` | Pauses background ticker roll while jackpot hit celebration runs. |
