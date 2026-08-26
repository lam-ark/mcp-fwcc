---
id: "cc_slot_module:PoolFactoryModule:inheritance:subclassing_guide"
title: "PoolFactoryModule Subclassing Guide"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PoolFactoryModule Subclassing Guide

---

## 1. Subclassing Rules

1. **Do not override `onLoad()` directly**: Implement `onLoadExtend()` to configure custom pool parameters.
2. **Always call `returnObject()`**: When animations finish, always return nodes to prevent pool starvation.
3. **Reset node transformations**: Clean scale, rotation, and opacity before returning nodes to the pool.
