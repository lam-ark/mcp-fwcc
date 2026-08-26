---
id: "cc_slot_mechanics:RemovedSymbolData:pipeline:pipeline_orchestration"
title: "RemovedSymbolData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ RemovedSymbolData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteRemovedSymbolData(data: any) {
    return [
        {
            command: "_scriptRemovedSymbolDataAction",
            data: data
        }
    ];
}
```
