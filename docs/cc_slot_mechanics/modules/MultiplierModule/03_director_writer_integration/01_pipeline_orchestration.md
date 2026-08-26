---
id: "cc_slot_mechanics:MultiplierModule:pipeline:pipeline_orchestration"
title: "MultiplierModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MultiplierModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMultiplierModule(data: any) {
    return [
        {
            command: "_scriptMultiplierModuleAction",
            data: data
        }
    ];
}
```
