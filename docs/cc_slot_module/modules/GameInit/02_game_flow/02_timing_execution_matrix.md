---
id: "cc_slot_module:GameInit:game_flow:timing_execution_matrix"
title: "GameInit Timing & Method Execution Matrix"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "game_flow", "timing_matrix", "execution_order", "lifecycle"]
---

# ⏱️ GameInit Timing & Method Execution Matrix

## 1. Execution Timing Matrix

| Lifecycle Stage | Exact Invoker | Method Called | State Mutation & Injections | Failure Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Frame 0 (Pre-Render)** | Cocos Engine Loader | `onLoad()` | Executes synchronous initialization pipeline (steps 1 to 9). | Whole game crashes; no services registered. |
| **Frame 0 - Step 1** | `onLoad()` | `setupTest()` | Conditionally attaches `SetupModuleTest` if `isModuleTest` is true. | Test mocks missing (only in test mode). |
| **Frame 0 - Step 2** | `onLoad()` | `initializeConfigAndDataStore()` | Loads `_gameConfig`, calls `_dataStore.setConfig()`. | Unconfigured DataStore; table dimensions unknown. |
| **Frame 0 - Step 3** | `onLoad()` | `initializeGameLogic()` | Creates `new Game(_gameConfig)`, sets language. | Network & game state engine uninstantiated. |
| **Frame 0 - Step 4** | `onLoad()` | `setupLogger()` | Configures `eno.logger` with console styles and `CC_DEBUG`. | Loss of formatted debug logs. |
| **Frame 0 - Step 5** | `onLoad()` | `setupScheduler()` | Instantiates `eno.Scheduler(GAME_ID)`. | Timer delays and async spin timeouts fail. |
| **Frame 0 - Step 6** | `onLoad()` | `setupMoneyFormatter()` | Instantiates `MoneyFormatter` and `MoneyTween`. | Number rolling and currency displays broken. |
| **Frame 0 - Step 7** | `onLoad()` | `setupEventManager()` | Creates `new GameEventManager()`. | Global event bus null; crash on `@inject(GameEventManager)`. |
| **Frame 0 - Step 8** | `onLoad()` | `setupDependencyInjection()` | Calls `provide()` for all 12 core singletons. | Child `SlotBaseModule` components crash on `applyInjections()`. |
| **Frame 0 - Step 9** | `onLoad()` | `setupGameText()` | Updates custom slot game text dictionary. | Missing localized label text. |
| **Frame 1** | Cocos Engine | `start()` -> `connect()` | Initiates socket connection via `connectNetwork.loginScene()`. | Player cannot authenticate with slot server. |
| **Post-Auth Callback** | Network Socket | `setUpGame()` | Calls `_gameLogic.initNetwork(network)`. | Spin request / response packets not routed. |
| **Scene Teardown** | Cocos Engine | `onDestroy()` | Calls `clearGameDependencies(gameId)` and destroys instances. | Memory leak across scene reloads. |
