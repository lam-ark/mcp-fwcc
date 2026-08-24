---
id: "cc_slot_module:CascadeModuleConfig:director_writer:pipeline_orchestration"
title: "CascadeModuleConfig Pipeline Role & Provisioning"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 CascadeModuleConfig Pipeline Role & Provisioning

---

## 1. Pipeline Integration

Supplies geometry rules and physics timings to `CascadeModuleData` and `VerticalCascadeModule`:
```text
CascadeModuleConfig (Single Source of Physics Truth)
       │
       ├──> CascadeModuleData (Format matrix, drop symbol code)
       └──> VerticalCascadeModule (Cell positions, drop times, symbol indexes)
```
