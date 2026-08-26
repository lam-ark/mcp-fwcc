---
id: "cc_slot_mechanics:NudgeReelModule:pipeline:pipeline_orchestration"
title: "NudgeReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ NudgeReelModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteNudgeReelModule(data: any) {
    return [
        {
            command: "_scriptNudgeReelModuleAction",
            data: data
        }
    ];
}
```
