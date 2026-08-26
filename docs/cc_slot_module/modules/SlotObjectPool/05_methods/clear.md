---
id: "cc_slot_module:SlotObjectPool:methods:clear"
title: "SlotObjectPool.clear Method"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "methods", "clear"]
---

# 📖 `SlotObjectPool.clear()`

---

## 1. Method Overview & Signature

Safely iterates all active nodes in `usingObjects` and returns each to the pool via `this.put(object)`.

```typescript
public clear(): void
```

---

## 2. Complete Source Code Implementation

```typescript
clear(): void {
    if (!isValid(this)) {
        return;
    }

    [...this.usingObjects].forEach((object) => {
        this.put(object);
    });
    this.usingObjects = [];
}
```
