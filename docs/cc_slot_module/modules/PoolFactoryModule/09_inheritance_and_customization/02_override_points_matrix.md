---
id: "cc_slot_module:PoolFactoryModule:inheritance:override_points_matrix"
title: "PoolFactoryModule Override Points Matrix"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧩 PoolFactoryModule Override Points Matrix

---

## 1. Matrix of Virtual Hooks

| Method | Base Behavior | Safe to Override? | Required Super Call | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onLoadExtend()`** | Empty virtual hook | `YES (Recommended)` | `None` | Set up custom listeners or pool warmup hooks |
| **`getObject()`** | Fetches or instantiates node | `YES` | `Optional` | Inject custom node reset / initialization logic |
| **`returnObject()`** | Puts node back to pool | `YES` | `MANDATORY` | Stop running tweens/Spine animations before recycle |
