---
id: "cc_slot_mechanics:MegaReelConfig:pipeline:pipeline_orchestration"
title: "MegaReelConfig Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MegaReelConfig", "mega_reel_config", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MegaReelConfig Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMegaReelConfig(data: any) {
    return [
        {
            command: "_scriptMegaReelConfigAction",
            data: data
        }
    ];
}
```
