---
id: "cc_slot_module:GameEventManager:overview:lifecycle_flowchart"
title: "GameEventManager Async Event Dispatch Flowchart"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "overview", "lifecycle", "flowchart", "async", "promise_all"]
---

# 🔄 GameEventManager Async Event Dispatch Flowchart

## 1. Sequence Diagram: Parallel Dispatch via `Promise.all`

```mermaid
sequenceDiagram
    autonumber
    participant Publisher as Publisher (Director / Table)
    participant GEM as GameEventManager
    participant Sub1 as Subscriber 1 (Async Animation)
    participant Sub2 as Subscriber 2 (Sync State Update)
    participant Sub3 as Subscriber 3 (Sound Player)

    Publisher->>GEM: await emit("UPDATE_WIN_AMOUNT", payload)
    activate GEM
    
    par Async Animation
        GEM->>Sub1: boundFn(payload)
        Sub1-->>GEM: returns Promise (e.g. 2.0s count-up tween)
    and Sync State Update
        GEM->>Sub2: boundFn(payload)
        Sub2-->>GEM: returns void -> wrapped as Promise.resolve()
    and Sound Trigger
        GEM->>Sub3: boundFn(payload)
        Sub3-->>GEM: returns void -> wrapped as Promise.resolve()
    end

    Note over GEM: Awaits Promise.all([Sub1_Promise, Sub2_Promise, Sub3_Promise])
    Sub1-->>GEM: Count-up tween resolves after 2.0s
    GEM-->>Publisher: emit() Promise resolves successfully
    deactivate GEM

    Publisher->>Publisher: Resumes downstream spin sequence
```
