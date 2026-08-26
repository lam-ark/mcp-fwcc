---
id: "cc_slot_mechanics:StickySymbolData:pipeline:pipeline_orchestration"
title: "StickySymbolData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ StickySymbolData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteStickySymbolData(data: any) {
    return [
        {
            command: "_scriptStickySymbolDataAction",
            data: data
        }
    ];
}
```
