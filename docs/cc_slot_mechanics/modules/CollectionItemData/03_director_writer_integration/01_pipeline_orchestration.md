---
id: "cc_slot_mechanics:CollectionItemData:pipeline:pipeline_orchestration"
title: "CollectionItemData Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ CollectionItemData Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteCollectionItemData(data: any) {
    return [
        {
            command: "_scriptCollectionItemDataAction",
            data: data
        }
    ];
}
```
