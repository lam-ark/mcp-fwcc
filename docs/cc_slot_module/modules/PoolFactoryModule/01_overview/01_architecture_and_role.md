---
id: "cc_slot_module:PoolFactoryModule:overview:architecture_and_role"
title: "PoolFactoryModule Architectural Role & Node Pooling Factory"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "overview", "architecture", "pooling", "node_pool"]
---

# 🏛️ PoolFactoryModule Architectural Role & Node Pooling Factory

---

## 1. Architectural Mission

`PoolFactoryModule` is the **standard generic object pooling factory** in the Cocos Common (`cc-common`) Slot Framework SDK. It encapsulates Cocos Creator's native `cc.NodePool`, providing pre-instantiation, checked-out instance tracking (`_usedObjects`), dynamic instantiation fallbacks, and safe bulk recycling (`returnAllObjects`, `clear`).

```mermaid
graph TD
    User[Client / FX Module] -->|getObject| PFM[PoolFactoryModule]
    PFM -->|1. Check pool.size > 0| Pool[cc.NodePool]
    Pool -->|get recycled node| Node[Active cc.Node]
    PFM -->|2. Fallback if pool empty| Inst[instantiate template]
    Inst --> Node
    PFM -->|3. Register in _usedObjects| Tracker[_usedObjects List]
    User -->|returnObject / returnAllObjects| PFM
    PFM -->|put back & unregister| Pool
```

---

## 2. Key Responsibilities

1. **Pre-Allocation & Warmup**:
   - In `onLoad()`, pre-instantiates `initCount` instances of `template: cc.Prefab` and seeds them into the internal `cc.NodePool`.
2. **Lifecycle Tracking**:
   - Maintains an array of currently active objects in `_usedObjects` to prevent node leaks and ensure clean state resets between spins or mode switches.
3. **Graceful Fallback & Destruction**:
   - If the pool is empty when `getObject()` is called, dynamically calls `cc.instantiate(this.template)`.
   - If `returnObject()` is invoked after the pool is cleared/destroyed, safely falls back to `obj.destroy()`.
