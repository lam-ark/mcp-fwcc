---
id: "cc_slot_module:PoolFactoryModule:methods:onLoad"
title: "PoolFactoryModule.onLoad Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `PoolFactoryModule.onLoad()`

---

## 1. Method Overview & Signature

Initializes the `cc.NodePool` using the node's name, instantiates `initCount` items of `template`, puts them into the pool, and calls `onLoadExtend()`.

```typescript
protected onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onLoad(): void {
    this._pool = new NodePool(this.name);
    for (let index = 0; index < this.initCount; index++) {
        if (!this.template) {
            continue;
        }
        const element = instantiate(this.template);
        this._pool.put(element);
    }

    this.onLoadExtend();
}
```
