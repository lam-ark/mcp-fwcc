---
id: "cc_slot_mechanics:NudgeTableModule:pipeline:pipeline_orchestration"
title: "NudgeTableModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ NudgeTableModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteNudgeTableModule(data: any) {
    return [
        {
            command: "_scriptNudgeTableModuleAction",
            data: data
        }
    ];
}
```
