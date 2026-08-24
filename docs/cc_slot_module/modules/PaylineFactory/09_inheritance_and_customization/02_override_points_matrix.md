---
id: "cc_slot_module:PaylineFactory:inheritance:override_points_matrix"
title: "PaylineFactory Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineFactory Override Points & Extension Matrix

---

## 1. Override Points Matrix

| Method | Super Required | Safe to Replace | Purpose |
| :--- | :--- | :--- | :--- |
| `_spawnObject` | No | YES | Custom node wrapping or component initialization. |
| `getObject` | Optional | YES | Custom pool balancing or fallbacks. |
| `returnObject` | Optional | YES | Custom resetting before returning to pool. |
