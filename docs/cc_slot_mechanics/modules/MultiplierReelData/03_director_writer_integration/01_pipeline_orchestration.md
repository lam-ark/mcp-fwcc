---
id: "cc_slot_mechanics:MultiplierReelData:pipeline:pipeline_orchestration"
title: "MultiplierReelData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MultiplierReelData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMultiplierReelData(data: any) {
    return [
        {
            command: "_scriptMultiplierReelDataAction",
            data: data
        }
    ];
}
```
