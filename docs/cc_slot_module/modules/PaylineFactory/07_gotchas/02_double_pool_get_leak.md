---
id: "cc_slot_module:PaylineFactory:gotchas:double_pool_get_leak"
title: "Gotcha: Double pool.get() Redundancy and Orphaned Pooled Nodes"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "gotchas", "double_get_bug", "orphaned_nodes"]
---

# ⚠️ Gotcha: Double `pool.get()` Redundancy and Orphaned Pooled Nodes

---

## 1. Problem Description

In `PaylineFactory.ts`, the `getObject(name)` method implementation contains a logical defect:

```typescript
public getObject(name: string): cc.Node {
    if (!this.prefabMap.has(name)) {
        error(`Prefab ${name} not registered.`);
        return null;
    }

    const pool = this.poolMap.get(name);
    let node = pool.get(); // 👈 First pull from pool

    if (pool.size() > 0) {
        node = pool.get(); // 👈 Second pull from pool (overwrites first node)
    } else {
        node = this._spawnObject(name); // 👈 Spawns new node (overwrites first node)
    }

    return node;
}
```

---

## 2. Root Cause & Impact

1. **When `pool.size() === 1`**:
   - `let node = pool.get()` retrieves the single node; pool size becomes `0`.
   - `if (pool.size() > 0)` evaluates to `false`.
   - `else` branch executes `node = this._spawnObject(name)`, overwriting `node`.
   - **Result**: The preloaded node from the pool is lost/orphaned in memory, and an unnecessary clone is instantiated.
2. **When `pool.size() >= 2`**:
   - `let node = pool.get()` pulls node 1.
   - `if (pool.size() > 0)` evaluates to `true` and calls `node = pool.get()`, pulling node 2.
   - **Result**: Node 1 is pulled from the pool and immediately orphaned without being returned to the scene graph.

---

## 3. Recommended Fix in Custom Subclasses

Override `getObject(name)` in your custom factory subclass or fix the implementation:

```typescript
public getObject(name: string): cc.Node {
    if (!this.prefabMap.has(name)) {
        cc.error(`Prefab ${name} not registered.`);
        return null;
    }

    const pool = this.poolMap.get(name);
    let node: cc.Node = null;

    if (pool && pool.size() > 0) {
        node = pool.get();
    } else {
        node = this._spawnObject(name);
    }

    return node;
}
```
