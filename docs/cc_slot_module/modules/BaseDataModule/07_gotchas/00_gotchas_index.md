---
id: "cc_slot_module:BaseDataModule:gotchas:index"
title: "BaseDataModule Gotchas Index"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BaseDataModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_registered_keys_no_update`](./01_missing_registered_keys_no_update.md)** | Subclass never receives updates when backend sends data. | `registeredKeys` array omitted or spelled differently than payload property name. | 🔴 Critical (Silent Data Failure) |
| **[`02_property_shadowing_getter_setter`](./02_property_shadowing_getter_setter.md)** | Direct assignment `this[key] = value` overwrites custom class methods or getters. | Subclass defines method with the exact same name as a registered server key. | 🔴 Critical (Method Overwrite) |
| **[`03_unregister_leak_on_dynamic_node_destroy`](./03_unregister_leak_on_dynamic_node_destroy.md)** | `GameDataStore` calls `onDataUpdate()` on destroyed node component instances. | Subclass dynamically created and destroyed without removing itself from `dataStore.registeredModules`. | 🟡 High (Dangling Pointer) |
