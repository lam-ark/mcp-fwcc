---
id: "cc_slot_mechanics:MultiplierReelConfig:pipeline:pipeline_orchestration"
title: "MultiplierReelConfig Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MultiplierReelConfig", "multiplier_reel_config", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MultiplierReelConfig Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMultiplierReelConfig(data: any) {
    return [
        {
            command: "_scriptMultiplierReelConfigAction",
            data: data
        }
    ];
}
```
