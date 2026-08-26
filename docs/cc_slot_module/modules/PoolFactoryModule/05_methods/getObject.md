---
id: "cc_slot_module:PoolFactoryModule:methods:getObject"
title: "PoolFactoryModule.getObject Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "getObject"]
---

# 📖 `PoolFactoryModule.getObject()`

---

## 1. Method Overview & Signature

Fetches a node from the pool if available (`this._pool.size() > 0`), or instantiates a fresh instance of `this.template`. Adds the node to `_usedObjects` and returns it.

```typescript
public getObject(): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
getObject(): cc.Node {
    const obj = this._pool.size() ? this._pool.get() : instantiate(this.template);
    this._usedObjects.push(obj);

    return obj;
}
```
