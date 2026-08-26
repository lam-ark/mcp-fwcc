---
id: "cc_slot_mechanics:InfinityTableData:pipeline:pipeline_orchestration"
title: "InfinityTableData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["InfinityTableData", "infinity_table_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ InfinityTableData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteInfinityTableData(data: any) {
    return [
        {
            command: "_scriptInfinityTableDataAction",
            data: data
        }
    ];
}
```
