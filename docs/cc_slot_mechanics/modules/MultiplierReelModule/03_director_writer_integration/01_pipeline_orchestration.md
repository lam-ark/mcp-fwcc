---
id: "cc_slot_mechanics:MultiplierReelModule:pipeline:pipeline_orchestration"
title: "MultiplierReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MultiplierReelModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMultiplierReelModule(data: any) {
    return [
        {
            command: "_scriptMultiplierReelModuleAction",
            data: data
        }
    ];
}
```
