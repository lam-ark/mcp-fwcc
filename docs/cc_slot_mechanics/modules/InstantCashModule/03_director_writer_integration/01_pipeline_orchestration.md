---
id: "cc_slot_mechanics:InstantCashModule:pipeline:pipeline_orchestration"
title: "InstantCashModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ InstantCashModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteInstantCashModule(data: any) {
    return [
        {
            command: "_scriptInstantCashModuleAction",
            data: data
        }
    ];
}
```
