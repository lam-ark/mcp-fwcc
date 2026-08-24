---
id: "cc_slot_module:PaylineFactory:methods:getObject"
title: "PaylineFactory.getObject Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "getObject"]
---

# 📖 `PaylineFactory.getObject()`

---

## 1. Method Overview & Signature

Retrieves a node from the named pool, or spawns a new one if pool is empty.

```typescript
public getObject(name: string): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
public getObject(name: string): cc.Node {
    if (!this.prefabMap.has(name)) {
        error(`Prefab ${name} not registered.`);
        return null;
    }

    const pool = this.poolMap.get(name);
    let node = pool.get();

    if (pool.size() > 0) {
        node = pool.get();
    } else {
        node = this._spawnObject(name);
    }

    return node;
}
```
