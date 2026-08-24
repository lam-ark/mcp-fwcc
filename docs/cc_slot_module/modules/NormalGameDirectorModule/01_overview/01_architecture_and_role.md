---
id: "cc_slot_module:NormalGameDirectorModule:overview:architecture_and_role"
title: "NormalGameDirectorModule Base Game Orchestrator Architecture"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "overview", "architecture", "normal_game", "spin_loop"]
---

# 🏛️ NormalGameDirectorModule Base Game Orchestrator Architecture

## 1. Executive Summary & Purpose

`NormalGameDirectorModule` (`assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameDirectorModule.ts`) is the **Base Game Spin Loop Controller** in the `cc-common` Slot SDK.

Extending `GameModeDirectorModule`, it manages the lifecycle of the default Base Game mode (`GAME_MODE_ENUM.NORMAL_GAME`). It orchestrates initial authentication handshake events (`onJoinGameSuccess`), handles normal game spins and respins, and mediates transitions into Free Game or Bonus Game modes.

```mermaid
graph TD
    GL[eno.GameLogic] -->|JOIN_GAME_SUCCESS| NGD[NormalGameDirectorModule<br/>Canvas/Director/GameMode/NormalGame]
    
    subgraph Base Game Spin Pipeline
        NGD --> Writer[NormalGameWriterModule<br/>Declarative Step Generator]
        NGD --> Exec[ScriptExecutor<br/>Asynchronous Step Engine]
        NGD --> Table[SlotTableModule<br/>Reel Animations & Near-Win]
    end

    subgraph Feature Mode Transitions
        NGD -->|transitionGameMode 2| Free[FreeGameDirectorModule]
        NGD -->|transitionGameMode 4| Bonus[BonusGameDirectorModule]
    end
```

---

## 2. Core Responsibilities

1. **Authentication State Propagation**: Dispatches `JOIN_GAME_SUCCESS` event to unlock UI spin buttons after WebSocket connection.
2. **Normal Spin Flow Coordination**: Triggers `NormalSpinTrigger`, `StartSpinning`, `StopSpinningTable`, and `ShowResultFinal`.
3. **Session Reconnection Management**: Handles `onStateResume()` and pre-resume payline setups when player returns to normal game.
