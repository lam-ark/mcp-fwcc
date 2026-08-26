---
id: "cc_slot_module:PoolFactoryModule:pipeline:subsystem_impacts"
title: "PoolFactoryModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "pipeline", "subsystem_impacts"]
---

# 🌐 PoolFactoryModule Subsystem Impacts

---

## 1. Impact Matrix

* **Memory & Garbage Collection**: Eliminates runtime GC spikes caused by continuous `cc.instantiate` and `node.destroy` during intensive spin loops.
* **Scene Graph Performance**: Keeps inactive nodes removed from the active rendering tree via `NodePool.put()`.
* **Director Reset Synchronization**: Enables instant cleanup during Turbo / Fast Stop via `returnAllObjects()`.
