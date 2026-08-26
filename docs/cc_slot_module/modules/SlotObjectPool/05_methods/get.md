---
id: "cc_slot_module:SlotObjectPool:methods:get"
title: "SlotObjectPool.get Method"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "methods", "get"]
---

# 📖 `SlotObjectPool.get()`

---

## 1. Method Overview & Signature

Validates `this.prefabObject`, retrieves a node from `this.pool` or instantiates `this.prefabObject`, sets `active = true`, sets parent to `this.node`, registers it in `usingObjects`, and returns the node.

```typescript
public get(): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
get(): cc.Node {
    if (!isValid(this.prefabObject)) {
        error("Prefab object is not valid in Object Pool " + this.node.name);
        return null;
    }
    const object = this.pool.size() ? this.pool.get() : instantiate(this.prefabObject);
    object.active = true;
    object.setParent(this.node);
    this.usingObjects.push(object);
    return object;
}
```
