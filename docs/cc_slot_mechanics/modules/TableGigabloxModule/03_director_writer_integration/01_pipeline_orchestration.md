---
id: "cc_slot_mechanics:TableGigabloxModule:pipeline:pipeline_orchestration"
title: "TableGigabloxModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ TableGigabloxModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteTableGigabloxModule(data: any) {
    return [
        {
            command: "_scriptTableGigabloxModuleAction",
            data: data
        }
    ];
}
```
