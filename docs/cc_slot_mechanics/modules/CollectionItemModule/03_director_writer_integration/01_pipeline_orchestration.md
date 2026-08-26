---
id: "cc_slot_mechanics:CollectionItemModule:pipeline:pipeline_orchestration"
title: "CollectionItemModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ CollectionItemModule Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteCollectionItemModule(data: any) {
    return [
        {
            command: "_scriptCollectionItemModuleAction",
            data: data
        }
    ];
}
```
