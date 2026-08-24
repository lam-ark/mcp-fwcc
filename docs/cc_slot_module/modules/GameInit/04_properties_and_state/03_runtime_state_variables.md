---
id: "cc_slot_module:GameInit:properties:runtime_state_variables"
title: "GameInit Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "properties", "runtime_state", "variables"]
---

# 💾 GameInit Internal Runtime State Variables

## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| **`_gameLogic`** | `eno.Game` | `null` | Instantiated in `initializeGameLogic()` | Core game engine instance. Destroyed in `onDestroy()`. |
| **`_dataStore`** | `GameDataStore` | `null` | Resolved in `initializeConfigAndDataStore()` | Reference to active reactive data store on `Canvas/Director`. |
| **`_gameConfig`** | `GameConfig` | `null` | Resolved in `initializeConfigAndDataStore()` | Master game configuration component reference. |
| **`_eventManager`** | `GameEventManager` | `null` | Instantiated in `setupEventManager()` | Global asynchronous event bus. Destroyed in `onDestroy()`. |
| **`_logger`** | `eno.Logger` | `null` | Resolved in `setupLogger()` | Styled console logger for `[GameView]` and `[EventManager]`. |
| **`_scheduler`** | `eno.Scheduler` | `null` | Instantiated in `setupScheduler()` | Timer scheduler instance scoped to `_gameConfig.GAME_ID`. |
| **`_moneyFormatter`** | `eno.MoneyFormatter` | `null` | Instantiated in `setupMoneyFormatter()` | Formatter for currency strings based on `CURRENCY_CONFIG`. |
| **`_moneyTween`** | `eno.MoneyTween` | `null` | Instantiated in `setupMoneyFormatter()` | Tween runner for animated rolling number counters. |
