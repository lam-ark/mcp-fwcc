---
id: "cc_slot_mechanics:HorizontalTableConfig:pipeline:pipeline_orchestration"
title: "HorizontalTableConfig Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ HorizontalTableConfig Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteHorizontalTableConfig(data: any) {
    return [
        {
            command: "_scriptHorizontalTableConfigAction",
            data: data
        }
    ];
}
```
