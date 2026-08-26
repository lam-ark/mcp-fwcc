---
id: "cc_slot_mechanics:CollectionItemData:integration:director"
title: "CollectionItemData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CollectionItemData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CollectionItemData` hooks directly into the writer command array:

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
| **`COLLECT_SCATTER`** | `GameModeDirector` / `SlotTable` | `CollectionItemData` | `{ totalWay, matrix, colIndex }` |
| **`COLLECTION_TARGET_REACHED`** | `GameModeDirector` / `SlotTable` | `CollectionItemData` | `{ totalWay, matrix, colIndex }` |
