---
id: "cc_slot_module:SlotCustomNodePool:properties:inspector_properties"
title: "SlotCustomNodePool Constructor Parameters Reference"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "properties", "constructor_params"]
---

# 🎛️ SlotCustomNodePool Constructor Parameters Reference

---

## 1. Instantiation Arguments

| Parameter Name | TypeScript Type | Purpose & Role |
| :--- | :--- | :--- |
| `template` | `cc.Prefab` | Default base symbol prefab for standard paying symbols (`A`, `K`, `Q`, etc.). |
| `initCount` | `number` | Initial allocation size for the standard symbol pool (e.g. 30). |
| `specialSymbolTemplates`| `SpecialSymbolTemplates[]` | List of special symbol prefabs (`symbolCode`, `template`, `initCount`). |
