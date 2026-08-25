---
id: "cc_slot_module:SlotBaseModule:overview:architecture_and_role"
title: "SlotBaseModule Architectural Role & SDK Dependency Injection Foundation"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "overview", "architecture", "dependency_injection"]
---

# 🏛️ SlotBaseModule Architectural Role & SDK Dependency Injection Foundation

---

## 1. Architectural Mission

`SlotBaseModule` is the fundamental abstract base class for all UI components, directors, managers, and visual modules across the `cc-common` slot engine. It provides automated **Dependency Injection (DI)** via `eno.applyInjections(this, gameId)` on engine initialization (`onLoad`), injecting singleton services (`gameLogic`, `eventManager`, `observer`, `soundPlayer`), establishing game-mode scoped event isolation (`moduleEvent`, `gameMode`), and binding the global spin reset lifecycle hook (`RESET_ALL_EFFECT_AND_TASKS`).

```mermaid
graph TD
    Engine[Cocos Creator onLoad] --> SBM[SlotBaseModule]
    
    subgraph Dependency Injection Container
        SBM -->|@inject eno.Game| GL[gameLogic: eno.Game]
        SBM -->|@inject GameEventManager| EM[eventManager: GameEventManager]
        SBM -->|@inject ObserverObject| OB[observer: eno.ObserverObject]
        SBM -->|@inject SlotSoundPlayerModule| SP[soundPlayer: SlotSoundPlayerModule]
    end
    
    subgraph Mode Scoped Communication
        GMD[GameModeDirector] -->|setupModule| SBM
        SBM -->|moduleEvent: GameModuleEvent| ME[Game-Mode Scoped Event Bus]
        SBM -->|gameMode: NORMAL_GAME / FREE_GAME / BONUS_GAME| GM[Current Game Mode]
    end
    
    subgraph Lifecycle Hooks
        SBM --> onLoadExtend[onLoadExtend]
        SBM --> registerEvents[registerEvents]
        SBM --> resetAllEffectAndTasks[resetAllEffectAndTasks]
    end
```

---

## 2. The Five Injected Core Services

### 1. `gameLogic` (`@inject(eno.Game)`)
- Access to active game data models (`getDataModel().BetData`, `getDataModel().WalletData`, `getDataModel().SlotTableData`).
- Access to persistent stores (`getDataStore().getCurrency()`, `getDataStore().isAutoSpin()`).
- High-level UI command dispatching (`emit(GameLogicUIEvents.OPEN_SETTING_PANEL)`).
- Subscribes to global orchestration notifications (`RESET_ALL_EFFECT_AND_TASKS`).

### 2. `eventManager` (`@inject(GameEventManager)`)
- Global cross-system event bus bridging independent modules (Reels, GUI, Popup, Cascade, Cutscenes).
- Supports priority listeners (`on(event, cb, target, priority)`) and clean target disposal (`targetOff(this)`).

### 3. `observer` (`@inject(ObserverObject)`)
- Reactive data-binding watcher (`watch(model, property, callback, target, options)`).
- Options support `{ fireImmediately: true, canTriggerSameValue: true }`.
- Complete memory-leak prevention via `releaseAll(model, target)`.

### 4. `soundPlayer` (`@inject(SlotSoundPlayerModule)`)
- Audio trigger gateway (`playSFXClick()`, `playSFXSpin()`, `playSFXWin()`, `playBGM()`).

### 5. `moduleEvent` (`GameModuleEvent`) & `gameMode`
- Scoped event bus isolated to a single Game Mode (e.g. `NORMAL_GAME` vs `FREE_GAME`).
- Injected via `setupModule(moduleEvent, gameMode)`. Detects duplicate multi-mode registration to prevent event cross-talk.
