---
id: "cc_slot_module:SlotSymbolManager:properties:inspector_properties"
title: "SlotSymbolManager Inspector Properties"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SlotSymbolManager Inspector Properties

## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`template`** | `cc.Prefab` | `null` | Base prefab instantiated into `symbolPool`. |
| **`initCount`** | `number` | `15` | Pre-warmed pool capacity created on load. |
| **`isSymbolPool`**| `boolean` | `true` | `true`: Uses `NodePool.put()`; `false`: Reparents to `this.node`. |
