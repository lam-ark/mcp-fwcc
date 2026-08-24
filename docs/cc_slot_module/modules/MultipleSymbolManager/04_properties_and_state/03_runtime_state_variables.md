---
id: "cc_slot_module:MultipleSymbolManager:properties:runtime_state_variables"
title: "MultipleSymbolManager Runtime State Variables"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "properties", "runtime_state"]
---

# 📊 MultipleSymbolManager Runtime State Variables

---

## 1. Internal Fields

| Field Name | Type | Initial Value | Mutation Moment | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `symbolPool` | `SlotCustomNodePool` | `null` | Assigned in `initSymbolPool()` | Overrides base `cc.NodePool` with multi-pool routing engine. |
