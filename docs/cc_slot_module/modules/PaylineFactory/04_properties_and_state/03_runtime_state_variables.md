---
id: "cc_slot_module:PaylineFactory:properties_and_state:runtime_state_variables"
title: "PaylineFactory Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineFactory Internal Runtime State Variables

---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `poolMap` | `Map<string, cc.NodePool>` | `new Map()` | Dictionary of active NodePools keyed by pool item name. |
| `prefabMap` | `Map<string, cc.Prefab>` | `new Map()` | Dictionary of registered Prefab assets. |
