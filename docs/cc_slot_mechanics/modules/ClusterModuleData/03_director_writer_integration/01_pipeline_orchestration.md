---
id: "cc_slot_mechanics:ClusterModuleData:pipeline:pipeline_orchestration"
title: "ClusterModuleData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ ClusterModuleData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteClusterModuleData(data: any) {
    return [
        {
            command: "_scriptClusterModuleDataAction",
            data: data
        }
    ];
}
```
