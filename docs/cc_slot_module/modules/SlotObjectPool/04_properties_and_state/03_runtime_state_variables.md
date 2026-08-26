---
id: "cc_slot_module:SlotObjectPool:properties:runtime_state_variables"
title: "SlotObjectPool Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotObjectPool Runtime State Variables

---

## 1. Internal Fields

| Field | Type | Default | Mutation Moment | Purpose |
| :--- | :--- | :---: | :--- | :--- |
| **`pool`** | `cc.NodePool` | `new NodePool()` | Initialized at declaration | Holds deactivated `cc.Node` objects |
| **`usingObjects`** | `cc.Node[]` | `[]` | Updated on `get()`, `put()`, `clear()` | Holds active nodes for batch reclamation |
