---
id: "cc_slot_mechanics:MegawayData:pipeline:pipeline_orchestration"
title: "MegawayData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MegawayData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMegawayData(data: any) {
    return [
        {
            command: "_scriptMegawayDataAction",
            data: data
        }
    ];
}
```
