---
id: "cc_slot_module:ScriptExecutor:overview:lifecycle_flowchart"
title: "ScriptExecutor Queue Execution & Speed Resolution Flowchart"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "overview", "lifecycle", "flowchart", "queue", "getCommandName"]
---

# 🔄 ScriptExecutor Queue Execution & Speed Resolution Flowchart

## 1. Step Dispatch & Speed Routing Flowchart

```mermaid
graph TD
    Start([runAction actionName, data]) --> Make[writer.makeScript actionName data]
    Make --> Queue[Populate scripts.actionName.actions]
    Queue --> Loop[executeNextScript: Shift first action]
    
    subgraph Speed-Specific Routing (getCommandName)
        Loop --> SpeedCheck{director.command_speed exists?}
        SpeedCheck -->|Yes| UseSpeed[Use command_speed e.g. STOP_REEL_2]
        SpeedCheck -->|No| UseBase[Use base command e.g. STOP_REEL]
    end

    UseSpeed --> Dispatch[director.command data]
    UseBase --> Dispatch
    
    Dispatch --> AwaitPromise{Promise Resolves?}
    AwaitPromise -->|Yes| NextCheck{More steps in queue?}
    NextCheck -->|Yes| Loop
    NextCheck -->|No| Finish[onFinishScript: resolve Promise]
    
    AwaitPromise -->|Error / Reject| CatchErr[catch error & log to console]
```
