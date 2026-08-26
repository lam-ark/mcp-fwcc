---
id: "cc_slot_mechanics:MegawayModuleConfig:pipeline:pipeline_orchestration"
title: "MegawayModuleConfig Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MegawayModuleConfig", "megaway_module_config", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MegawayModuleConfig Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMegawayModuleConfig(data: any) {
    return [
        {
            command: "_scriptMegawayModuleConfigAction",
            data: data
        }
    ];
}
```
