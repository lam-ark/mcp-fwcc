---
id: "cc_slot_module:PoolFactoryModule:methods:getSize"
title: "PoolFactoryModule.getSize Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "getSize"]
---

# 📖 `PoolFactoryModule.getSize()`

---

## 1. Method Overview & Signature

Returns the number of available nodes currently in `this._pool`.

```typescript
public getSize(): number
```

---

## 2. Complete Source Code Implementation

```typescript
getSize(): number {
    return this._pool.size();
}
```
