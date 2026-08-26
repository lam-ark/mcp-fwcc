---
id: "cc_slot_module:SlotObjectPool:methods:onLoad"
title: "SlotObjectPool.onLoad Method"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `SlotObjectPool.onLoad()`

---

## 1. Method Overview & Signature

Loops `initCount` times, calling `this.get()` followed immediately by `this.put()` to populate the pool with ready-to-use instances.

```typescript
public onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
    for (let i = 0; i < this.initCount; i++) {
        const object = this.get();
        this.put(object);
    }
}
```
