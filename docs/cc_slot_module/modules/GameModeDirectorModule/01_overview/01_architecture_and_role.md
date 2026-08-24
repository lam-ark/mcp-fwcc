---
id: "cc_slot_module:GameModeDirectorModule:overview:architecture_and_role"
title: "GameModeDirectorModule Mode Controller Architecture"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "overview", "architecture", "mode_management", "moduleList", "GameModuleEvent"]
---

# 🏛️ GameModeDirectorModule Mode Controller Architecture

## 1. Executive Summary & Purpose

`GameModeDirectorModule` (`assets/cc-common/cc-slot-module/GameMode/GameModeDirectorModule.ts`) is the **Game Mode Controller Base Class** in the `cc-common` Slot SDK.

Extending `BaseGameDirector`, it manages the visual and logical lifecycle of a specific slot game mode (e.g. Normal Game, Free Game, Bonus Game). It establishes a private, scoped event bus (`GameModuleEvent`), injects it into all sibling components listed in `moduleList`, and mediates the 8 spin lifecycle phases between the backend `eno.GameLogic` and the scene graph.

```mermaid
graph TD
    GL[eno.GameLogic / WebSocket] -->|onStateUpdate / onStartSpin| GMD[GameModeDirectorModule<br/>Canvas/Director/GameMode/...]
    
    subgraph Mode Director Architecture
        GMD --> ME[moduleEvent: Private GameModuleEvent Bus]
        GMD --> Exec[ScriptExecutor: Action Pipeline]
        GMD --> Store[GameDataStore: State & Matrices]
    end

    subgraph Scoped Sibling Modules (moduleList)
        ME -->|TABLE_START_SPIN / STOP| Table[SlotTableModule]
        ME -->|SHOW_PAYLINES| Paylines[SlotTablePaylineData & PaylineModule]
        ME -->|TRIGGER_WIN_EFFECT| WinFX[WinEffectModule]
        ME -->|SYNC_TABLE| Board[Board Container]
    end
```

---

## 2. Core Responsibilities

1. **Scoped Event Bus Injection (`setupModules`)**: Creates a local `GameModuleEvent` bus and binds it to every component listed in `moduleList`.
2. **Spin Lifecycle Hook Handling**: Implements handlers for `onBeforeSpinStart()`, `onStartSpinningTable()`, `onStopSpinningTable()`, `onShowResultEntry()`, `onShowResultFinal()`.
3. **Seamless Game Mode Switching**: Orchestrates `transitionGameMode()`, `enterGameMode()`, and `exitGameMode()` with automatic resume bypass.
4. **Fast-To-Result (FTR) Acceleration**: Broadcasts `TABLE_FAST_STOP` and switches `gameSpeed` to `INSTANTLY`.
