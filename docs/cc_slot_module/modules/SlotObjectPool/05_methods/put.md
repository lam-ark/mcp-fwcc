---
id: "cc_slot_module:SlotObjectPool:methods:put"
title: "SlotObjectPool.put Method"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "methods", "put"]
---

# 📖 `SlotObjectPool.put()`

---

## 1. Method Overview & Signature

Validates that both the node and the pool component are valid, deactivates the node (`object.active = false`), splices it from `usingObjects`, and puts it into `this.pool`.

```typescript
public put(object: cc.Node): void
```

---

## 2. Complete Source Code Implementation

```typescript
put(object: cc.Node): void {
    if (!isValid(object) || !isValid(this)) {
        return;
    }
    object.active = false;
    const indexOf = this.usingObjects.indexOf(object);
    if (indexOf != -1) {
        this.usingObjects.splice(indexOf, 1);
    }
    this.pool.put(object);
}
```
