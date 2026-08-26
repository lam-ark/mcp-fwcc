---
id: "cc_slot_mechanics:HorizontalTableData:pipeline:pipeline_orchestration"
title: "HorizontalTableData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ HorizontalTableData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteHorizontalTableData(data: any) {
    return [
        {
            command: "_scriptHorizontalTableDataAction",
            data: data
        }
    ];
}
```
