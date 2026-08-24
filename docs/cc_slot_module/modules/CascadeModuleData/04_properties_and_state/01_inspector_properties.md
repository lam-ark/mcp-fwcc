---
id: "cc_slot_module:CascadeModuleData:properties_and_state:inspector_properties"
title: "CascadeModuleData Properties Specification"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ CascadeModuleData Properties Specification

---

## 1. Registered Reactive Keys

```typescript
registeredKeys = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix", "traceWay"];
```

| Key Name | Ingestion Source | Purpose |
| :--- | :--- | :--- |
| `matrix` / `matrix0` | Server session payload | Active round symbol matrix. |
| `normalGameMatrix` | Server Normal Game | Main game specific matrix array. |
| `freeGameMatrix` | Server Free Game | Free spins specific matrix array. |
| `traceWay` | Server hit payload | Flat integer array of winning symbol indexes to eliminate. |
