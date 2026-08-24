---
id: "cc_slot_module:SlotCustomNodePool:customization:override_points_matrix"
title: "SlotCustomNodePool Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "customization", "override_points"]
---

# 📋 SlotCustomNodePool Override Points Matrix

---

## 1. Extension Points Summary

| Method Signature | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `getSpecialPoolName(code)` | `YES` | Optional | Custom naming scheme for dynamic symbol variations. |
| `createPool(name, template, count)` | `YES` | `MANDATORY` | Custom node initialization hooks before pooling. |
| `getSymbolFromPool(pool, code, isSpecial)` | `YES` | `MANDATORY` | Custom fallback instantiation strategies. |
