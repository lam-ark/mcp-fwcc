---
id: "cc_slot_mechanics:InstantCashData:pipeline:pipeline_orchestration"
title: "InstantCashData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ InstantCashData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteInstantCashData(data: any) {
    return [
        {
            command: "_scriptInstantCashDataAction",
            data: data
        }
    ];
}
```
