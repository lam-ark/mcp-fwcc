---
id: "cc_slot_module:GameModeDirectorModule:methods:index"
title: "GameModeDirectorModule Methods Index"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "methods", "index"]
---

# 📋 GameModeDirectorModule Methods Index

---

## 1. Lifecycle & Spin Flow Methods

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`setupModules(): void`](./setupModules.md)** | `public` | Instantiates `GameModuleEvent` and binds it to all nodes in `moduleList`. |
| **[`onStateUpdate(data: any): void`](./onStateUpdate.md)** | `public` | Ingests server spin packet into `GameDataStore` and triggers `updateDataModules()`. |
| **[`onBeforeSpinStart(): Promise<void>`](./onBeforeSpinStart.md)** | `public` | Dispatches `NormalSpinTrigger` action before spinning reels. |
| **[`onStartSpinningTable(): Promise<void>`](./onStartSpinningTable.md)** | `public` | Dispatches `StartSpinning` action to start continuous reel movement. |
| **[`onStopSpinningTable(): Promise<void>`](./onStopSpinningTable.md)** | `public` | Dispatches `StopSpinningTable` action to decelerate reels column by column. |
| **[`onShowResultEntry(): Promise<void>`](./onShowResultEntry.md)** | `public` | Dispatches `ShowResultEntry` (Big Win, Mega Win, Jackpot animations). |
| **[`onShowResultFinal(): Promise<void>`](./onShowResultFinal.md)** | `public` | Dispatches `ShowResultFinal` after mode exits to settle round. |
| **[`transitionGameMode(mode: number): Promise<void>`](./transitionGameMode.md)** | `public` | Manages mode transitions, skipping cutscenes when resuming an existing session. |
| **[`onFastToResult(mode: number): void`](./onFastToResult.md)** | `public` | Switches speed to `INSTANTLY` and emits `TABLE_FAST_STOP`. |
| **[`skipAllEffects(): Promise<void>`](./skipAllEffects.md)** | `public` | Clears active delay callbacks and triggers fast-forward of in-flight win presentations. |
| **[`_showResultEntry(): Promise<void>`](./_showResultEntry.md)** | `public` | Evaluates Big Win vs standard paylines and dispatches presentation. |
| **[`_handleBigWin(data: any): Promise<void>`](./_handleBigWin.md)** | `public` | Routes Big Win display to normal or fast mode depending on active game speed. |
| **[`_playJackpotWin(): Promise<void>`](./_playJackpotWin.md)** | `public` | Blinks jackpot winning symbols and launches unskippable jackpot cutscene celebration. |
