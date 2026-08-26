---
id: "cc_slot_module:PoolFactoryModule:methods:clear"
title: "PoolFactoryModule.clear Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "clear"]
---

# 📖 `PoolFactoryModule.clear()`

---

## 1. Method Overview & Signature

Recycles all checked-out objects and purges the internal `cc.NodePool`.

```typescript
public clear(): void
```

---

## 2. Complete Source Code Implementation

```typescript
clear(): void {
    this.returnAllObjects();
    this._pool.clear();
}
```
