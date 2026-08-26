---
id: "cc_slot_mechanics:InfinityReelModule:pipeline:pipeline_orchestration"
title: "InfinityReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ InfinityReelModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteInfinityReelModule(data: any) {
    return [
        {
            command: "_scriptInfinityReelModuleAction",
            data: data
        }
    ];
}
```
