---
id: "cc_slot_mechanics:StickySymbolConfig:pipeline:pipeline_orchestration"
title: "StickySymbolConfig Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["StickySymbolConfig", "sticky_symbol_config", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ StickySymbolConfig Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteStickySymbolConfig(data: any) {
    return [
        {
            command: "_scriptStickySymbolConfigAction",
            data: data
        }
    ];
}
```
