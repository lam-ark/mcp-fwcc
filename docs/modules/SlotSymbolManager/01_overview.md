---
id: "SlotSymbolManager:overview"
title: "SlotSymbolManager Overview & Architecture"
category: "cc_slot_module"
tags: ["table", "symbol", "pool", "lifecycle", "architecture"]
source_path: "assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolManager.ts"
inherits_from: "SlotBaseModule"
---

# SlotSymbolManager: Overview & Architecture

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolManager.ts`  
> **Inheritance**: `SlotSymbolManager` ➔ `SlotBaseModule` ➔ `cc.Component`

---

## 1. Architectural Role & Purpose

`SlotSymbolManager` is the **Lifecycle Orchestrator and Object Pool Container** for all Symbol nodes rendered across the slot game's reel table.

### Why is `SlotSymbolManager` Essential?
* In slot games, every spin cycle and cascade sequence continuously spawns and removes dozens of symbols.
* Using raw `cc.instantiate` and `node.destroy()` at 60 FPS triggers frequent JavaScript Garbage Collection (GC) pauses, causing **frame-rate drops and stutter** on mobile and web viewports.
* `SlotSymbolManager` leverages `cc.NodePool` to pre-allocate symbol instances during game bootstrap and recycles them throughout the gameplay session.

---

## 2. Table Lifecycle & Interaction Flow

```mermaid
sequenceDiagram
    participant Table as SlotTableModule / Cascade
    participant Mgr as SlotSymbolManager
    participant Pool as cc.NodePool
    participant Sym as SlotSymbolModule (Node)

    Note over Table,Mgr: 1. Spin Roll / Symbol Spawn
    Table->>Mgr: getSymbol(owner, code)
    Mgr->>Pool: pool.get(code)
    alt Node available in Pool
        Pool-->>Mgr: Return recycled Node instance
    else Pool is empty
        Mgr->>Mgr: instantiateNewSymbol()
    end
    Mgr->>Sym: setOwner(owner), setIndex(index)
    Mgr-->>Table: Return active Node ready for display

    Note over Table,Mgr: 2. Win Clears / Table Reset
    Table->>Mgr: removeSymbol(node, isForce)
    alt Sticky Wild && isForce == false
        Mgr-->>Table: Preserve on reel (Skip recycling)
    else Standard Removal
        Mgr->>Sym: resetBeforeBackToPool()
        Mgr->>Pool: pool.put(node)
    end
```
