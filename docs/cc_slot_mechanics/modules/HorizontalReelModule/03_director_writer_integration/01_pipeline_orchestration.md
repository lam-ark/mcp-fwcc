---
id: "cc_slot_mechanics:HorizontalReelModule:pipeline:pipeline_orchestration"
title: "HorizontalReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ HorizontalReelModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteHorizontalReelModule(data: any) {
    return [
        {
            command: "_scriptHorizontalReelModuleAction",
            data: data
        }
    ];
}
```
