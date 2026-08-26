---
id: "cc_slot_mechanics:MegaReelModule:pipeline:pipeline_orchestration"
title: "MegaReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MegaReelModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMegaReelModule(data: any) {
    return [
        {
            command: "_scriptMegaReelModuleAction",
            data: data
        }
    ];
}
```
