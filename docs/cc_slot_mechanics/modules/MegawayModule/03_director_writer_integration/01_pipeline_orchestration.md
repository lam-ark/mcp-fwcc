---
id: "cc_slot_mechanics:MegawayModule:pipeline:pipeline_orchestration"
title: "MegawayModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MegawayModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMegawayModule(data: any) {
    return [
        {
            command: "_scriptMegawayModuleAction",
            data: data
        }
    ];
}
```
