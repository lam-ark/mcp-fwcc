---
id: "cc_slot_module:PoolFactoryModule:properties:runtime_state_variables"
title: "PoolFactoryModule Runtime State Variables"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PoolFactoryModule Runtime State Variables

---

## 1. Internal State

| Field | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :---: | :--- | :--- |
| **`_pool`** | `cc.NodePool` | `null` | Initialized in `onLoad()` | Holds inactive recycled `cc.Node` objects |
| **`_usedObjects`** | `cc.Node[]` | `[]` | Modified on `getObject()`, `returnObject()` | Tracks checked-out active nodes to ensure comprehensive batch recycling |
