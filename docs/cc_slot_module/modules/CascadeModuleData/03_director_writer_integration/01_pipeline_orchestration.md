---
id: "cc_slot_module:CascadeModuleData:director_writer:pipeline_orchestration"
title: "CascadeModuleData Ingestion & Pipeline Role"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 CascadeModuleData Ingestion & Pipeline Role

---

## 1. Pipeline Integration

Acts as the reactive data bridge between network socket packets and visual cascade drops:
```text
GameDataStore
       │
       ▼ (updateDataModules)
CascadeModuleData
       │
       ▼ (formatData)
VerticalCascadeModule
```
