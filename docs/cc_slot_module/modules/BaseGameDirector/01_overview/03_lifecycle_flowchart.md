---
id: "cc_slot_module:BaseGameDirector:overview:lifecycle_flowchart"
title: "BaseGameDirector Initialization & Action Execution Flowchart"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "overview", "lifecycle", "flowchart", "runAction", "ScriptExecutor"]
---

# 🔄 BaseGameDirector Initialization & Action Execution Flowchart

## 1. Lifecycle Initialization & Action Dispatch Flowchart

```mermaid
graph TD
    Start([onLoad]) --> SuperLoad[super.onLoad: Resolve @inject services]
    SuperLoad --> ExtLoad[onExtendedLoad: Virtual Hook for subclasses]
    ExtLoad --> ModeInit[init: Bind writer & create ScriptExecutor]
    
    subgraph Action Execution (runAction)
        Trigger[Director calls runAction actionName, data] --> ExecCall[executor.runAction actionName, data]
        ExecCall --> MakeScript[writer.makeScript actionName]
        MakeScript --> Queue[Populate scripts.actionName.actions]
        Queue --> Loop[executeNextScript: Shift first command]
        Loop --> AwaitStep[Dispatch command to director/gameLogic & await]
        AwaitStep --> DoneCheck{More commands remaining?}
        DoneCheck -->|Yes| Loop
        DoneCheck -->|No| Finish[scripts.actionName.onFinish: Resolve Promise]
    end

    subgraph Teardown (onDestroy)
        DestroyNode([onDestroy]) --> ExecDestroy[this.executor.destroy]
    end
```
