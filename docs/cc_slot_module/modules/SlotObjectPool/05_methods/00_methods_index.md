---
id: "cc_slot_module:SlotObjectPool:methods:methods_index"
title: "SlotObjectPool Methods Master Index"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "methods", "index"]
---

# 📖 SlotObjectPool Methods Master Index

---

## 1. Declared Methods

| Method | Return Type | Scope | Description |
| :--- | :--- | :--- | :--- |
| **`onLoad()`** | `void` | `public` | Seeds `initCount` nodes into the pool by performing `get()` followed by `put()`. |
| **`get()`** | `cc.Node` | `public` | Fetches or instantiates a node, activates it, parents it to `this.node`, and tracks it. |
| **`put(object)`** | `void` | `public` | Deactivates a node, removes it from `usingObjects`, and returns it to `this.pool`. |
| **`clear()`** | `void` | `public` | Iterates all nodes in `usingObjects` and calls `put(object)` on each. |
