---
id: "cc_slot_module:PaylineFactory:methods:index"
title: "PaylineFactory Methods Catalog Index"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "index"]
---

# 📚 PaylineFactory Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoad`](./onLoad.md)** | `protected` | `void` | Initializes pools and triggers object preloading. |
| **[`preloadObjects`](./preloadObjects.md)** | `protected` | `void` | Pre-instantiates `count` nodes into specified pool. |
| **[`_spawnObject`](./_spawnObject.md)** | `protected` | `cc.Node` | Instantiates prefab and tags `__prefabName__`. |
| **[`getObject`](./getObject.md)** | `public` | `cc.Node` | Retrieves pooled node or spawns fresh instance. |
| **[`returnObject`](./returnObject.md)** | `public` | `void` | Recycles node back to its tagged pool. |
| **[`clearPool`](./clearPool.md)** | `public` | `void` | Flushes a specific pool. |
| **[`clearAllPools`](./clearAllPools.md)** | `public` | `void` | Flushes all managed pools. |
