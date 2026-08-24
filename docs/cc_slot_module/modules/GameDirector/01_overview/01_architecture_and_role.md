---
id: "cc_slot_module:GameDirector:overview:architecture_and_role"
title: "GameDirector Master Scene Orchestrator & Mode Router Architecture"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "overview", "architecture", "mode_stack", "scene_root", "GameLogic"]
---

# 🏛️ GameDirector Master Scene Orchestrator & Mode Router Architecture

## 1. Executive Summary & Purpose

`GameDirector` (`assets/cc-common/cc-slot-module/Core/GameDirector.ts`) is the **Root Scene Controller and Mode Dispatcher** mounted at `Canvas/Director`.

It acts as the primary bridge between the backend `eno.GameLogic` service and the Cocos Creator scene graph. It maintains the active game mode stack (`currentModes`), switches visual containers between Normal, Free, and Bonus game modes (`onSwitchGameMode`, `onExitGameMode`), routes network events to active mode controllers (`onUIEventRequest`), and coordinates application lifecycle events (`EVENT_HIDE`, `EVENT_SHOW`).

```mermaid
graph TD
    Canvas[Canvas/Director: GameDirector] --> Modes["gameModes: GameModeType[]<br/>[NormalGame, FreeGame, BonusGame]"]
    
    subgraph Mode Stack Routing (currentModes)
        Canvas -->|onSwitchGameMode 2| Free[FreeGame Active / NormalGame Inactive]
        Free -->|onExitGameMode| Norm[NormalGame Active / onBackToGameMode]
    end

    subgraph Network & Lifecycle Routing
        GL[eno.GameLogic] -->|registerUIEvents| Canvas
        Canvas -->|onUIEventRequest| Handler[GameLogicEventHandler on Active Mode]
        ccGame[cc.game EVENT_HIDE / SHOW] --> Canvas
    end
```

---

## 2. Core Responsibilities

1. **Master Game Mode Stack (`currentModes`)**: Maintains active and previous mode references, activating/deactivating container nodes during transitions.
2. **Backend Event Mediation (`registerUIEvents`, `onUIEventRequest`)**: Subscribes to all `GameLogicEvents` keys and forwards them directly to the `GameLogicEventHandler` on the active game mode node.
3. **Authentication Handshake (`onJoinGameSuccess`)**: Stores `bigWinConfig` into `SlotGameSettings` and sets `isJoinGameSuccess = true`.
4. **App Lifecycle & Background Pausing (`onEventHide`, `onEventShow`)**: Pauses/resumes `cc.director.getActionManager()` and notifies backend `gameLogic.gameOnPause()` when browser tab focus changes.
