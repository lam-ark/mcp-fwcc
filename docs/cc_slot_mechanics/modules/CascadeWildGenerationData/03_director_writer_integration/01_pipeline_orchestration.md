---
id: "cc_slot_mechanics:CascadeWildGenerationData:pipeline:pipeline_orchestration"
title: "CascadeWildGenerationData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ CascadeWildGenerationData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteCascadeWildGenerationData(data: any) {
    return [
        {
            command: "_scriptCascadeWildGenerationDataAction",
            data: data
        }
    ];
}
```
