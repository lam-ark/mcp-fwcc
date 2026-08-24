---
id: "cc_slot_module:GameInit:properties:injected_services"
title: "GameInit Provided & Injected Services Architecture"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "properties", "injected_services", "provide", "ioc", "container"]
---

# 💉 GameInit Provided & Injected Services Architecture

## 1. Provided Services Reference Table

`GameInit` functions as the IoC Container root. Instead of receiving injected services, it registers (**provides**) 12 core service instances to the container via `eno.provide(Token, Instance, gameId)`:

| Service Token | Concrete Instance Type | When Provided | Scope | Purpose & Downstream Consumers |
| :--- | :--- | :--- | :--- | :--- |
| **`eno.Game`** | `_gameLogic` (`eno.Game`) | `onLoad()` Step 8 | `gameId` | Core logic engine; manages data models, network packets, UI models. Read by `SlotBaseModule.gameLogic`. |
| **`eno.MoneyFormatter`** | `_moneyFormatter` | `onLoad()` Step 8 | `gameId` | Currency formatting engine with decimal and prefix rules. Read by `PaylineInfoModule`, `BetModule`. |
| **`eno.MoneyTween`** | `_moneyTween` | `onLoad()` Step 8 | `gameId` | Value rolling tween engine. Read by `WalletModule` and `PaylineInfoModule`. |
| **`eno.Logger`** | `_logger` | `onLoad()` Step 8 | `gameId` | Standardized logger with styled prefix tags (`[GameView]`, `[EventManager]`). |
| **`GameDataStore`** | `_dataStore` (`GameDataStore`) | `onLoad()` Step 8 | `gameId` | Central reactive data store (`playSession`, `wallet`, `bet`). Read by Directors and Writers. |
| **`GameConfig`** | `_gameConfig` (`GameConfig`) | `onLoad()` Step 8 | `gameId` | Master slot configuration (`TABLE_FORMAT`, `PAY_SYSTEM`). Read by Table and Betting modules. |
| **`UIManagerModule`** | `uiManager` | `onLoad()` Step 8 | `gameId` | Root HUD coordinator for bottom control bar and overlays. |
| **`GameEventManager`** | `_eventManager` | `onLoad()` Step 8 | `gameId` | Asynchronous global event bus. Read by `SlotBaseModule.eventManager`. |
| **`SlotSoundPlayerModule`** | `slotSoundPlayer` | `onLoad()` Step 8 | `gameId` | Sound player module for BGM and win SFX loops. Read by `SlotBaseModule.soundPlayer`. |
| **`eno.Scheduler`** | `_scheduler` | `onLoad()` Step 8 | `gameId` | Game timer engine for delay actions and spin timeouts. |
| **`eno.ObserverObject`** | `eno.observer` | `onLoad()` Step 8 | `gameId` | Reactive watcher for DataModel properties. Read by `SlotBaseModule.observer`. |
| **`SlotGameSettings`** | `gameSettings` | `onLoad()` Step 8 | `gameId` | User preference store (sound mute states, turbo switch, active locale). |
