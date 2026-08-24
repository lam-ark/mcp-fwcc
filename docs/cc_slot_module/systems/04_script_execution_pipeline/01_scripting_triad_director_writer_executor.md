---
id: "cc_slot_module:systems:script_pipeline:scripting_triad_director_writer_executor"
title: "The 3-Tier Scripting Triad (Director - Writer - Executor)"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "scripting_triad", "architecture", "module_linkage", "flow"]
---

# 🎭 The 3-Tier Scripting Triad (Director - Writer - Executor)

---

## 1. Architectural Triad Blueprint

The core orchestration model of the `cc-common` Slot SDK is built upon the **3-Tier Scripting Triad**:

```mermaid
graph TD
    Director[1. Director: NormalGameDirectorModule<br/>• Owns visual Cocos Nodes<br/>• Executes actual animation methods<br/>• Emits moduleEvent events]
    
    Writer[2. Writer: NormalGameWriterModule<br/>• Pure decision engine<br/>• Evaluates game state<br/>• Generates declarative command queues]
    
    Executor[3. Executor: ScriptExecutor<br/>• Asynchronous runner<br/>• Iterates command queue<br/>• Chains Promises sequentially]

    Director -->|Requests Next Phase Script| Writer
    Writer -->|Returns Structured Command Array| Executor
    Executor -->|Sequentially Invokes Target Methods| Director
```

---

## 2. Responsibilities & Separation of Concerns

### Tier 1: `Director` (Visual Execution Host)
* Exposes concrete implementation methods: `_startSpinningTable()`, `_stopSpinningTable()`, `_showResultEntry()`, `_setUpPaylines()`.
* Interacts directly with Cocos Creator scene nodes, tweens, and Spine skeleton components.
* Does not decide the sequential order of operations; it merely executes actions when called.

### Tier 2: `Writer` (Declarative Choreography Planner)
* Implements methods returning command arrays: `makeScriptStartSpinning()`, `makeScriptStopSpinningTable()`, `makeScriptShowResultEntry()`.
* Reads state from `GameDataStore` to conditionally construct queues (e.g. if Jackpot won, insert `_playJackpotWin`; if Free Spins triggered, insert `_showTransitionGameMode`).
* Pure logic without direct visual scene coupling.

### Tier 3: `ScriptExecutor` (Asynchronous Pipeline Engine)
* Holds a reference to the active script queue: `this.script = [...]`.
* Invokes each command on the Director target, inspecting whether the returned value is a `Promise`.
* If a Promise is returned, awaits resolution before popping and executing the next command.

---

## 3. End-to-End Execution Sequence Flow

```mermaid
sequenceDiagram
    autonumber
    participant Dir as NormalGameDirectorModule
    participant Wrt as NormalGameWriterModule
    participant Exec as ScriptExecutor

    Dir->>Dir: onStopSpinningTable() triggered by network response
    Dir->>Wrt: makeScriptStopSpinningTable()
    Wrt-->>Exec: Returns [{ command: "_stopSpinningTable" }, { command: "_setUpPaylines" }]
    Exec->>Exec: executeNextScript() pops command 1
    Exec->>Dir: Invokes Dir._stopSpinningTable()
    Dir-->>Exec: Returns Promise (resolves after 1.2s deceleration)
    Note over Exec: Awaits Promise resolution
    Exec->>Exec: executeNextScript() pops command 2
    Exec->>Dir: Invokes Dir._setUpPaylines()
    Dir-->>Exec: Returns Promise (resolves after payline setup)
    Exec-->>Dir: Queue empty -> Execution complete
```
