---
id: "cc_slot_module:GameModeWriterModule:overview:architecture_and_role"
title: "GameModeWriterModule Master Script Generator Architecture"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "overview", "architecture", "makeScript", "base_writer"]
---

# 🏛️ GameModeWriterModule Master Script Generator Architecture

## 1. Executive Summary & Purpose

`GameModeWriterModule` (`assets/cc-common/cc-slot-module/GameMode/GameModeWriterModule.ts`) is the **Root Abstract Script Generator Base Class** for all game mode writers (`NormalGameWriterModule`, `FreeGameWriterModule`, `BonusGameWriterModule`).

Extending `SlotBaseModule`, it binds itself to the mode container node via `this.node["writer"] = this` and defines the default, out-of-the-box action script generator methods for starting spins, stopping reels, executing anticipation teasers, running cascade respins, and triggering game mode transitions.

```mermaid
graph TD
    GMWM[GameModeWriterModule: Base Script Generator]
    
    GMWM --> NGW[NormalGameWriterModule: Base Game Spins]
    GMWM --> FGW[FreeGameWriterModule: Free Spin Loops]
    GMWM --> BGW[BonusGameWriterModule: Pick Mini-Games]
    
    subgraph Core Generator Capabilities
        GMWM --> S1[makeScriptStartSpinning]
        GMWM --> S2[makeScriptStopSpinningTable]
        GMWM --> S3[makeScriptPreStopSpinningTable]
        GMWM --> S4[makeScriptStartRespinning / StopRespinning]
        GMWM --> S5[makeScriptShowResultEntry / TransitionGameMode]
    end
```

---

## 2. Core Responsibilities

1. **Self-Registration on Node (`onLoadExtend`)**: Assigns `this.node["writer"] = this` so `BaseGameDirector.init()` can locate and bind it to `ScriptExecutor`.
2. **Default Spin Pipelines**: Provides standard command descriptor arrays for starting reels (`_startSpinningTable`), stopping reels (`_stopSpinningTable`, `_setUpPaylines`), and stopping respins (`_showRespinResultEntry`, `_stopRespinningTable`, `_setUpPaylines`, `_showRespinResultFinal`).
3. **Emergency Stop Scripting (`makeScriptStopCurrentGameMode`)**: Compiles `_stopCurrentGameMode` and `_forceResetGameMode` for rapid teardown.
