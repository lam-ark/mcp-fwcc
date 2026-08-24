---
id: "cc_slot_module:PaylineFactory:methods:clearPool"
title: "PaylineFactory.clearPool Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "clearPool"]
---

# 📖 `PaylineFactory.clearPool()`

---

## 1. Method Overview & Signature

Clears all inactive nodes from a named pool.

```typescript
public clearPool(name: string): void
```

---

## 2. Complete Source Code Implementation

```typescript
public clearPool(name: string): void {
    if (!this.poolMap.has(name)) {
        return;
    }

    const pool = this.poolMap.get(name);
    pool.clear();
}
```
