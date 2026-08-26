---
id: "cc_slot_mechanics:HorizontalTableModule:pipeline:pipeline_orchestration"
title: "HorizontalTableModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ HorizontalTableModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteHorizontalTableModule(data: any) {
    return [
        {
            command: "_scriptHorizontalTableModuleAction",
            data: data
        }
    ];
}
```
