---
id: "cc_slot_mechanics:TumblingTableConfig:pipeline:pipeline_orchestration"
title: "TumblingTableConfig Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ TumblingTableConfig Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteTumblingTableConfig(data: any) {
    return [
        {
            command: "_scriptTumblingTableConfigAction",
            data: data
        }
    ];
}
```
