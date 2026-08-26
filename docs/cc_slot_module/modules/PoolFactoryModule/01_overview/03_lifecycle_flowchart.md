---
id: "cc_slot_module:PoolFactoryModule:overview:lifecycle_flowchart"
title: "PoolFactoryModule Lifecycle & Sequence Diagram"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "overview", "lifecycle", "sequence"]
---

# 🔄 PoolFactoryModule Lifecycle & Sequence Diagram

---

## 1. Node Allocation & Recycling Sequence

```mermaid
sequenceDiagram
    participant Scene as Scene / Engine
    participant Factory as PoolFactoryModule
    participant Pool as cc.NodePool
    participant Client as Feature / Director

    Scene->>Factory: onLoad()
    Factory->>Pool: new cc.NodePool(this.name)
    loop i = 0 to initCount - 1
        Factory->>Factory: instantiate(template)
        Factory->>Pool: put(element)
    end
    Factory->>Factory: onLoadExtend()

    Client->>Factory: getObject()
    alt pool.size() > 0
        Factory->>Pool: get()
    else pool is empty
        Factory->>Factory: instantiate(template)
    end
    Factory->>Factory: _usedObjects.push(obj)
    Factory-->>Client: obj: cc.Node

    Client->>Factory: returnObject(obj)
    Factory->>Factory: _usedObjects.splice(index, 1)
    Factory->>Pool: put(obj)
```
