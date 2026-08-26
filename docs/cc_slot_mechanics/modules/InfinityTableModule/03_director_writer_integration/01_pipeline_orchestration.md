---
id: "cc_slot_mechanics:InfinityTableModule:pipeline:pipeline_orchestration"
title: "InfinityTableModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ InfinityTableModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteInfinityTableModule(data: any) {
    return [
        {
            command: "_scriptInfinityTableModuleAction",
            data: data
        }
    ];
}
```
