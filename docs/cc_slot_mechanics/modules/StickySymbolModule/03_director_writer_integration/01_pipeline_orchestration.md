---
id: "cc_slot_mechanics:StickySymbolModule:pipeline:pipeline_orchestration"
title: "StickySymbolModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ StickySymbolModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteStickySymbolModule(data: any) {
    return [
        {
            command: "_scriptStickySymbolModuleAction",
            data: data
        }
    ];
}
```
