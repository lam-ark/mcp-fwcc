---
id: "cc_slot_module:PaylineFactory:methods:clearAllPools"
title: "PaylineFactory.clearAllPools Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "clearAllPools"]
---

# 📖 `PaylineFactory.clearAllPools()`

---

## 1. Method Overview & Signature

Flushes all managed NodePools.

```typescript
public clearAllPools(): void
```

---

## 2. Complete Source Code Implementation

```typescript
public clearAllPools(): void {
    this.poolMap.forEach((pool, name) => {
        this.clearPool(name);
    });
}
```
