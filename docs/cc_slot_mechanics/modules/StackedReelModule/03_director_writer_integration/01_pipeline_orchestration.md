---
id: "cc_slot_mechanics:StackedReelModule:pipeline:pipeline_orchestration"
title: "StackedReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ StackedReelModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteStackedReelModule(data: any) {
    return [
        {
            command: "_scriptStackedReelModuleAction",
            data: data
        }
    ];
}
```
