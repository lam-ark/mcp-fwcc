---
id: "cc_slot_module:SlotObjectPool:inheritance:override_points_matrix"
title: "SlotObjectPool Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧩 SlotObjectPool Override Points Matrix

---

## 1. Override Matrix

| Method | Base Behavior | Safe to Override? | Required Super Call |
| :--- | :--- | :--- | :--- |
| **`get()`** | Instantiates/fetches & sets active | `YES` | `MANDATORY` |
| **`put()`** | Deactivates & puts to pool | `YES` | `MANDATORY` |
| **`clear()`** | Recycles all active nodes | `YES` | `MANDATORY` |
