---
id: "cc_slot_module:SlotObjectPool:properties:inspector_properties"
title: "SlotObjectPool Inspector Properties"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "properties", "inspector"]
---

# 📋 SlotObjectPool Inspector Properties

---

## 1. Serialized Fields

| Property | Type | Default | When Set | Where Read | Impact if Invalid |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **`prefabObject`** | `cc.Prefab` | `null` | Editor Inspector | `get()` | `get()` outputs error log and returns `null` |
| **`initCount`** | `number` | `15` | Editor Inspector | `onLoad()` | Defines initial pool capacity |
