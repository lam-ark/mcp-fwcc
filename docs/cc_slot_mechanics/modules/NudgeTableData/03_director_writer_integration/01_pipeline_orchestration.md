---
id: "cc_slot_mechanics:NudgeTableData:pipeline:pipeline_orchestration"
title: "NudgeTableData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["NudgeTableData", "nudge_table_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ NudgeTableData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteNudgeTableData(data: any) {
    return [
        {
            command: "_scriptNudgeTableDataAction",
            data: data
        }
    ];
}
```
