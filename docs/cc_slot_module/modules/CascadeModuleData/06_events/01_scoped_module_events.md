---
id: "cc_slot_module:CascadeModuleData:events:scoped_module_events"
title: "CascadeModuleData Reactive Events"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "events", "scoped_events"]
---

# 📡 CascadeModuleData Reactive Events

---

## 1. Store Ingestion Pipeline

Inherited from `BaseDataModule`:
- Listens to data store broadcasts matching `registeredKeys`.
- Populates raw values onto `this` instance automatically.
