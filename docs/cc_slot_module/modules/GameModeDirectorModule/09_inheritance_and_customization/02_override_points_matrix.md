---
id: "cc_slot_module:GameModeDirectorModule:customization:override_points_matrix"
title: "GameModeDirectorModule Master Extension Points & Override Matrix"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 GameModeDirectorModule Master Extension Points & Override Matrix

## 1. Complete Override Matrix

| Method Name | Visibility | Default Behavior | Safe to Override? | Required `super` Call | Customization Purpose in New Game |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`onExtendedLoad()`** | `public` | Hooks events & runs `setupModules()` | `EXTEND_ONLY` | `MANDATORY` | Wire `this.node["director"]`, `this.node["writer"]`, and call `this.init()`. |
| **`onJoinGameSuccess(data)`** | `public` | Empty hook | `YES` | None | Perform game-specific authentication and player level initialization. |
| **`onStateUpdate(data)`** | `public` | Calls `parseDataPS` & `updateDataModules` | `EXTEND_ONLY` | `MANDATORY` | Intercept custom server data structures before broadcast. |
| **`onBeforeSpinStart()`** | `public` | Dispatches `NormalSpinTrigger` action | `YES` | None (Virtual) | Play custom pre-spin teasers or sound stingers. |
| **`onStartSpinningTable()`**| `public` | Dispatches `StartSpinning` action | `YES` | None (Virtual) | Trigger special expanding reel intro animations. |
| **`onPreStopSpinningTable()`**| `public` | Dispatches `PreStopSpinningTable` action | `YES` | None (Virtual) | Play anticipation teasers when landing 2 Scatters. |
| **`onStopSpinningTable()`** | `public` | Dispatches `StopSpinningTable` action | `YES` | None (Virtual) | Check expanding sticky wilds and trigger cascade falls. |
| **`onShowResultEntry()`** | `public` | Dispatches `ShowResultEntry` action | `YES` | None (Virtual) | Coordinate custom Big Win, Mega Win, and Epic Win thresholds. |
| **`onShowResultFinal()`** | `public` | Dispatches `ShowResultFinal` action | `YES` | None (Virtual) | Commit progressive win multipliers and resume wallet. |
| **`transitionGameMode(mode)`**| `public` | Checks `isResume` and runs transition | `YES` | `RECOMMENDED` | Play mode intro cutscenes and crossfade audio. |
| **`transitionToGameModeWhenResume(mode)`**| `public` | Returns `Promise.resolve()` | `YES` | None | Add lightweight matrix sync when reconnecting to Free Game. |
| **`onBackToGameMode(fromMode)`**| `public` | Plays main BGM | `YES` | `MANDATORY` | Reset progressive multipliers and streak combos. |
| **`onFastToResult(mode)`** | `public` | Sets `INSTANTLY` & emits `TABLE_FAST_STOP` | `EXTEND_ONLY` | `MANDATORY` | Snap custom particle effects and Spine animations immediately. |
| **`delayAutoSpin()`** | `public` | Calls `delayAction(0.5)` | `YES` | None | Adjust delay duration between auto-spin cycles. |
| **`_playSureWinEffect(data)`**| `public` | Returns `Promise.resolve()` | `YES` | None | Play dramatic screen shakes on guaranteed big win results. |
