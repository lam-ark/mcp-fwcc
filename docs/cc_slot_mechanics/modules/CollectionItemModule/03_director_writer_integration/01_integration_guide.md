---
id: "cc_slot_mechanics:CollectionItemModule:integration:director"
title: "CollectionItemModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CollectionItemModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CollectionItemModule` hooks directly into the writer command array:

```typescript
makeScriptStartSpinning(): Object[] {
    const listScript = [];
    listScript.push({
        command: "_startSpinningTable",
    });
    return listScript;
}
```

---

## 2. Director Event Handlers

| Event Name | Source | Listener Module | Functional Payload |
| :--- | :--- | :--- | :--- |
| **`COLLECT_SCATTER`** | `GameModeDirector` / `SlotTable` | `CollectionItemModule` | `{ totalWay, matrix, colIndex }` |
| **`COLLECTION_TARGET_REACHED`** | `GameModeDirector` / `SlotTable` | `CollectionItemModule` | `{ totalWay, matrix, colIndex }` |
