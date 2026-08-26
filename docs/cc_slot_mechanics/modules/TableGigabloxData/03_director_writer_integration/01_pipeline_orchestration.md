---
id: "cc_slot_mechanics:TableGigabloxData:pipeline:pipeline_orchestration"
title: "TableGigabloxData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ TableGigabloxData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteTableGigabloxData(data: any) {
    return [
        {
            command: "_scriptTableGigabloxDataAction",
            data: data
        }
    ];
}
```
