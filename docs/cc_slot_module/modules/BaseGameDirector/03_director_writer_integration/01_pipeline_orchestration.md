---
id: "cc_slot_module:BaseGameDirector:director_writer:pipeline_orchestration"
title: "The Director-Writer-Executor Triad & Game Flow Coordination"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "director_writer", "pipeline", "orchestration", "ScriptExecutor", "game_flow"]
---

# 🎼 The Director-Writer-Executor Triad & Game Flow Coordination

## 1. The Core Metaphor: The Theatre Triad

In the `cc-common` Slot framework, game flow orchestration is organized around a strict 3-way separation of concerns known as the **Director-Writer-Executor Triad**:

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Director as Director (BaseGameDirector)<br/>[Actor & Scene Controller]
    participant Writer as Writer (Companion Writer)<br/>[Screenplay Scriptwriter]
    participant Executor as ScriptExecutor<br/>[Stage Manager & Engine]
    participant Subsystems as Subsystems (Table/FX/Sound)

    Player->>Director: Clicks Spin Button
    Director->>Executor: runAction("SpinStart")
    Executor->>Writer: makeScriptSpinStart(data)
    Writer-->>Executor: Returns [{command: "START_REEL"}, {command: "LOCK_UI"}]
    
    loop Sequential Step Pipeline
        Executor->>Director: Executes command START_REEL
        Director->>Subsystems: Starts reel spin animation
        Subsystems-->>Director: Animation resolves
        Director-->>Executor: Promise resolved
    end
    
    Executor-->>Director: runAction("SpinStart") complete!
    
    Note over Director,Subsystems: Server returns spin result via WebSocket...
    
    Director->>Executor: runAction("SpinResult", playSession)
    Executor->>Writer: makeScriptSpinResult(playSession)
    Note over Writer: Pure logic: Checks winLines, bigWin, nextMode<br/>Generates custom dynamic script list
    Writer-->>Executor: [{command: "STOP_REEL"}, {command: "SHOW_PAYLINES"}, {command: "CHECK_BIG_WIN"}]
    
    loop Sequential Execution
        Executor->>Director: Resolves STOP_REEL (or STOP_REEL_1 in Turbo)
        Director->>Subsystems: Halts reels column by column
        Subsystems-->>Director: Reels stopped
        Director-->>Executor: Step Done
        Executor->>Director: Resolves SHOW_PAYLINES
        Director->>Subsystems: Renders win line trails & Spine victory
        Subsystems-->>Director: Paylines done
        Director-->>Executor: Step Done
    end
    
    Executor-->>Director: runAction("SpinResult") finished!
```

---

## 2. Roles Breakdown in the Game Flow

| Component | Architecture Role | Real-World Metaphor | What it MUST do | What it NEVER does |
| :--- | :--- | :--- | :--- | :--- |
| **`BaseGameDirector`** | **The Scene Controller & Actor** | *The Actor & Director on stage* | Holds node references (`Table`, `Wallet`, `Cutscenes`), listens to UI click events, implements concrete animation step methods (`STOP_REEL`, `SHOW_PAYLINES`). | Never compiles command lists directly; never hardcodes delays with `setTimeout`. |
| **`Companion Writer`** | **The Pure Script Generator** | *The Screenwriter writing the script* | Pure, synchronous logic. Inspects `data` / `playSession` and returns an array of declarative step objects: `[{ command: "...", data }]`. | Has **zero node references**, **no tweens**, **no async timers**, **no side effects**. |
| **`ScriptExecutor`** | **The Queue Step Engine** | *The Stage Manager running the cue sheet* | Drives the async execution loop, shifts commands one by one, routes commands to speed overrides (`STOP_REEL_1`), and handles emergency aborts (`forceToExit`). | Does not own scene nodes or create UI elements. |

---

## 3. Concrete Example: Dynamic Branching in Spin Result

When `runAction("SpinResult", playSession)` is dispatched:
1. The **Writer** checks `playSession`:
   * If `playSession.winLines.length > 0` ➔ Appends `{ command: "SHOW_PAYLINES" }`.
   * If `dataStore.isBigWin()` ➔ Appends `{ command: "TRIGGER_BIG_WIN_CUTSCENE" }`.
   * If `playSession.nextMode === 2` ➔ Appends `{ command: "SHOW_FREE_SPIN_INTRO" }`.
2. The **ScriptExecutor** guarantees that `TRIGGER_BIG_WIN_CUTSCENE` will **never start until `SHOW_PAYLINES` has finished its animation and resolved its Promise**.
3. If the user activates **Turbo Mode**, `ScriptExecutor` automatically re-routes `STOP_REEL` to `STOP_REEL_1` without requiring complex `if (isTurbo)` conditional branches throughout the codebase.
