---
id: "cc_slot_mechanics:TableGigabloxConfig:pipeline:pipeline_orchestration"
title: "TableGigabloxConfig Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["TableGigabloxConfig", "table_gigablox_config", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ TableGigabloxConfig Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteTableGigabloxConfig(data: any) {
    return [
        {
            command: "_scriptTableGigabloxConfigAction",
            data: data
        }
    ];
}
```
