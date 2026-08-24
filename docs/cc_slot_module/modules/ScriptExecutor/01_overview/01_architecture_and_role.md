---
id: "cc_slot_module:ScriptExecutor:overview:architecture_and_role"
title: "ScriptExecutor Asynchronous Action Step Engine Architecture"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "overview", "architecture", "queue", "async", "command_pattern"]
---

# 🏛️ ScriptExecutor Asynchronous Action Step Engine Architecture

## 1. Executive Summary & Purpose

`ScriptExecutor` (`assets/cc-common/cc-slot-module/GameMode/Core/ScriptExecutor.ts`) is the **Asynchronous Command Queue Processor** in the `cc-common` Slot SDK.

Constructed by `BaseGameDirector.init()`, `ScriptExecutor` bridges the declarative script arrays produced by Writers (`writer.makeScript[ActionName]`) with the concrete asynchronous execution methods on Directors (`director[command](data)`).

```mermaid
graph TD
    Director[BaseGameDirector Subclass] -->|runAction 'SpinResult', data| Exec[ScriptExecutor]
    Exec -->|1. makeScriptSpinResult| Writer[Companion Writer]
    Writer -->|2. Returns script array| Exec
    
    subgraph Execution Loop
        Exec -->|3. Shift command| Step[runCommand]
        Step -->|4. Speed Resolution: command_speed| Method[director.COMMAND data]
        Method -->|5. Awaits Promise| Step
        Step -->|6. executeNextScript| Exec
    end

    Exec -->|7. onFinish / Promise resolve| Director
```

---

## 2. Core Responsibilities

1. **Sequential Action Pipeline Execution**: Executes command arrays step by step, ensuring subsequent animations do not begin until the prior step's Promise resolves.
2. **Speed-Specialized Command Routing**: Automatically routes commands to speed-suffixed variants (e.g. `STOP_REEL_2` or `STOP_REEL_1`) if declared on the director.
3. **Graceful Action Interruption & Reset**: Transforms in-flight commands to `_reset[Command]` when quick-stopping or returning to real mode.
4. **Stylized Debug Logging**: Integrates with `eno.Logger` with color-coded tags (`[Action]`, `[Running]`, `[Skipping]`, `[Finish]`).
