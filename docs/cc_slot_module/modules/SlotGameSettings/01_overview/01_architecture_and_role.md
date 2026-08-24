---
id: "cc_slot_module:SlotGameSettings:overview:architecture_and_role"
title: "SlotGameSettings User Preferences & Runtime Flags Architecture"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "overview", "architecture", "preferences", "turbo", "auto_spin", "game_speed"]
---

# 🏛️ SlotGameSettings User Preferences & Runtime Flags Architecture

## 1. Executive Summary & Purpose

`SlotGameSettings` (`assets/cc-common/cc-slot-module/Core/SlotGameSettings.ts`) is the **State & User Preference Registry** of the `cc-common` Slot SDK.

Provided to the IoC container by `GameInit`, it maintains live runtime flags including Turbo Mode state (`isTurboActive`), Auto-Spin status (`isAutoSpin`), current game speed (`gameSpeed`), trial mode state (`isTrialMode`), and login authorization state (`isJoinGameSuccess`).

```mermaid
graph TD
    UI[GUI Controls] -->|Toggle Turbo / AutoSpin| SGS[SlotGameSettings<br/>State Container]
    
    SGS -->|isFastToResult / isTurboActive| Director[GameDirector & ScriptExecutor]
    SGS -->|isAutoSpin| AutoPanel[AutoSpinPanel]
    SGS -->|currentGameState| ButtonState[SlotButtonNormal & TurboButton]
```

---

## 2. Core Responsibilities

1. **Turbo & Game Speed Management**: Exposes `isTurboActive`, `gameSpeed`, and `isFastToResult` (`gameSpeed === GAME_SPEED_ENUM.INSTANTLY`).
2. **Auto Spin Coordination**: Tracks active auto-spin loop state.
3. **Session Context Verification**: Stores `isJoinGameSuccess` preventing premature spin submissions.
