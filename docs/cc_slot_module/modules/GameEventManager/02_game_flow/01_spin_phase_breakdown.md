---
id: "cc_slot_module:GameEventManager:game_flow:spin_phase_breakdown"
title: "GameEventManager Asynchronous Broadcast Lifecycle"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "game_flow", "async_broadcast", "Promise_all"]
---

# 🌀 GameEventManager Asynchronous Broadcast Lifecycle

## 1. Asynchronous Broadcast Flow

When any module calls `this.eventManager.emit("EVENT_NAME", payload)`, `GameEventManager` executes the following asynchronous lifecycle:

```mermaid
sequenceDiagram
    autonumber
    actor Emitter as Emitting Module (Director/UI)
    participant Bus as GameEventManager
    participant L1 as Listener 1 (Promise 200ms)
    participant L2 as Listener 2 (Promise 500ms)
    participant L3 as Listener 3 (Synchronous)

    Emitter->>Bus: await emit("ON_BIG_WIN", winData)
    par Concurrent Execution
        Bus->>L1: listener1.bind(ctx1)(winData)
        Bus->>L2: listener2.bind(ctx2)(winData)
        Bus->>L3: listener3.bind(ctx3)(winData)
    end
    Note over Bus: Awaits Promise.all([L1, L2, L3])
    L3-->>Bus: Returns immediate Promise.resolve()
    L1-->>Bus: Resolves after 200ms
    L2-->>Bus: Resolves after 500ms (Slowest)
    Bus-->>Emitter: emit() Promise resolves after 500ms
```
