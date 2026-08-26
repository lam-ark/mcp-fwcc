---
id: "cc_slot_mechanics:MultiplierReel:pipeline:pipeline_orchestration"
title: "MultiplierReel Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MultiplierReel Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMultiplierReel(data: any) {
    return [
        {
            command: "_scriptMultiplierReelAction",
            data: data
        }
    ];
}
```
