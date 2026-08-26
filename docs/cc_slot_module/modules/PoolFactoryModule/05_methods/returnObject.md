---
id: "cc_slot_module:PoolFactoryModule:methods:returnObject"
title: "PoolFactoryModule.returnObject Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "returnObject"]
---

# 📖 `PoolFactoryModule.returnObject()`

---

## 1. Method Overview & Signature

Recycles a borrowed node back into the pool. Removes it from `_usedObjects` and invokes `this._pool.put(obj)`, or calls `obj.destroy()` if the pool is no longer available.

```typescript
public returnObject(obj: cc.Node): void
```

---

## 2. Complete Source Code Implementation

```typescript
returnObject(obj: cc.Node): void {
    const indexOf = this._usedObjects.indexOf(obj);
    if (indexOf != -1) {
        this._usedObjects.splice(indexOf, 1);
    }

    if (this._pool) {
        this._pool.put(obj);
    } else {
        obj.destroy();
    }
}
```
