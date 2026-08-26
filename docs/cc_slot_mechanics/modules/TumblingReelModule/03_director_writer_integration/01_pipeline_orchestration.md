---
id: "cc_slot_mechanics:TumblingReelModule:pipeline:pipeline_orchestration"
title: "TumblingReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ TumblingReelModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteTumblingReelModule(data: any) {
    return [
        {
            command: "_scriptTumblingReelModuleAction",
            data: data
        }
    ];
}
```
