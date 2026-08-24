---
id: "cc_slot_module:PaylineFactory:methods:onLoad"
title: "PaylineFactory.onLoad Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `PaylineFactory.onLoad()`

---

## 1. Method Overview & Signature

Initializes internal pool and prefab maps, then preloads instances.

```typescript
protected onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onLoad(): void {
    this.poolItems.forEach(item => {
        this.prefabMap.set(item.name, item.prefab);
        this.poolMap.set(item.name, new NodePool(item.name));
        this.preloadObjects(item.name, item.initCount);
    });
}
```
