---
id: "cc_slot_module:NormalGameWriterModule:overview:architecture_and_role"
title: "NormalGameWriterModule Base Game Script Generator Architecture"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "overview", "architecture", "makeScript", "declarative_scripts"]
---

# 🏛️ NormalGameWriterModule Base Game Script Generator Architecture

## 1. Executive Summary & Purpose

`NormalGameWriterModule` (`assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameWriterModule.ts`) is the **Declarative Action Script Generator for Base Game Spins**.

Extending `GameModeWriterModule`, it contains pure synchronous factory methods (`makeScriptNormalSpinTrigger`, `makeScriptPreResumeGameMode`, `makeScriptSyncPlaySessionData`, `makeScriptShowResultFinal`). It builds ordered arrays of command objects that `ScriptExecutor` executes on `NormalGameDirectorModule`.

```mermaid
graph LR
    Director[NormalGameDirectorModule] -->|runAction 'NormalSpinTrigger'| Exec[ScriptExecutor]
    Exec -->|makeScriptNormalSpinTrigger| Writer[NormalGameWriterModule]
    Writer -->|Returns Step Array| Exec
    
    subgraph Generated Pipeline
        S1[_beforeSpinStart] --> S2[_syncPlaySessionData]
        S2 --> S3[_pauseWallet]
        S3 --> S4[_resetOnSpin]
        S4 --> S5[_clearWinAmount]
        S5 --> S6[_resetTable]
    end
```

---

## 2. Core Responsibilities

1. **Spin Preparation Scripting (`makeScriptNormalSpinTrigger`)**: Generates 6-step initialization pipeline (`_beforeSpinStart`, `_syncPlaySessionData`, `_pauseWallet`, `_resetOnSpin`, `_clearWinAmount`, `_resetTable`).
2. **Session Reconnection Scripting (`makeScriptPreResumeGameMode`)**: Assembles `_pauseWallet`, `_resumeNormalTable`, `_setUpPaylines`, `_resumeWinAmount`.
3. **Round Settlement Scripting (`makeScriptShowResultFinal`)**: Assembles `_resumeWallet` to re-enable wallet balance rolling upon round completion.
