---
id: "cc_slot_mechanics:GigabloxReelModule:pipeline:pipeline_orchestration"
title: "GigabloxReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ GigabloxReelModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteGigabloxReelModule(data: any) {
    return [
        {
            command: "_scriptGigabloxReelModuleAction",
            data: data
        }
    ];
}
```
