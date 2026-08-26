---
id: "cc_slot_module:PoolFactoryModule:properties:inspector_properties"
title: "PoolFactoryModule Inspector Properties"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "properties", "inspector"]
---

# 📋 PoolFactoryModule Inspector Properties

---

## 1. Serialized Fields

| Property | Type | Default | When Set | Where Read | Impact if Invalid |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **`template`** | `cc.Prefab` | `null` | Editor Inspector | `onLoad()`, `getObject()` | `getObject()` returns undefined / instantiation errors |
| **`initCount`** | `cc.Integer` | `5` | Editor Inspector | `onLoad()` | If 0, pool begins empty and allocates lazily |
