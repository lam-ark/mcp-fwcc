---
id: "cc_slot_module:CascadeModuleData:director_writer:subsystem_impacts"
title: "CascadeModuleData Subsystem Impacts"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 CascadeModuleData Subsystem Impacts

---

## 1. Subsystem Coordination

| Subsystem | Impact |
| :--- | :--- |
| **`VerticalCascadeModule`** | Directly queries `formatData()` before executing `startRespin()` and `stopRespin()`. |
| **`GameDataStore`** | Populates reactive properties via registered keys. |
