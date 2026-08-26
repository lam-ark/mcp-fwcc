---
id: "cc_slot_mechanics:MultiplierData:pipeline:pipeline_orchestration"
title: "MultiplierData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MultiplierData", "multiplier_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MultiplierData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMultiplierData(data: any) {
    return [
        {
            command: "_scriptMultiplierDataAction",
            data: data
        }
    ];
}
```
