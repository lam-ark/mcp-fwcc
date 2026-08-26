---
id: "cc_slot_mechanics:CollectionItem:pipeline:pipeline_orchestration"
title: "CollectionItem Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ CollectionItem Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteCollectionItem(data: any) {
    return [
        {
            command: "_scriptCollectionItemAction",
            data: data
        }
    ];
}
```
