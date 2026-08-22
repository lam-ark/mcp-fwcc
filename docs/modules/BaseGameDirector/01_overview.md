# BaseGameDirector: Overview & Architecture

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/Core/BaseGameDirector.ts`  
> **Inheritance**: `BaseGameDirector` ➔ `SlotBaseModule` ➔ `cc.Component`  
> **Online Reference**: [Game Mode & Directors on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/game-mode/)

---

## 1. Purpose & Architectural Role
`BaseGameDirector` is the **state machine orchestrator** driving game mode execution sequences:
* Manages the lifecycle of game rounds via `ScriptExecutor`: executing sequential or parallel async script tasks (`runAction`, `executeNextScript`).
* Handles step transitions: Spin Start ➔ Matrix Receive ➔ Table Stop ➔ Near-Win Presentation ➔ Payline Blink ➔ Multiplier Calculation ➔ Win Dialog ➔ Mode Switch (Free Spins / Bonus).
* Supports instant game speed modification (`setGameSpeed` for Turbo / Fast Play).

---

## 2. Director Script Execution Flow

```mermaid
sequenceDiagram
    participant Svc as GameService / Net
    participant Dir as BaseGameDirector / NormalGameDirector
    participant Exec as ScriptExecutor
    participant Table as SlotTableModule
    participant Pay as PaylineInfoModule

    Dir->>Exec: executeNextScript("START_SPIN")
    Exec->>Table: rollTable()
    Svc-->>Dir: On Spin Result (Matrix, Paylines)
    Dir->>Exec: executeNextScript("STOP_TABLE")
    Exec->>Table: stopTable()
    Table-->>Exec: TABLE_STOPPED
    Dir->>Exec: executeNextScript("SHOW_PAYLINES")
    Exec->>Pay: showPaylineInfo()
    Dir->>Exec: executeNextScript("NEXT_ROUND")
```
