---
id: "cc_slot_mechanics:StackedReelConfig:pipeline:pipeline_orchestration"
title: "StackedReelConfig Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["StackedReelConfig", "stacked_reel_config", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ StackedReelConfig Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteStackedReelConfig(data: any) {
    return [
        {
            command: "_scriptStackedReelConfigAction",
            data: data
        }
    ];
}
```
