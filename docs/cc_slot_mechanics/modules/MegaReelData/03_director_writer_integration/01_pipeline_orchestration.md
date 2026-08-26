---
id: "cc_slot_mechanics:MegaReelData:pipeline:pipeline_orchestration"
title: "MegaReelData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MegaReelData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMegaReelData(data: any) {
    return [
        {
            command: "_scriptMegaReelDataAction",
            data: data
        }
    ];
}
```
