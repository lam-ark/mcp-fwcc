---
id: "cc_slot_mechanics:CollectionItemModuleConfig:integration:director"
title: "CollectionItemModuleConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CollectionItemModuleConfig", "collection_item_module_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CollectionItemModuleConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CollectionItemModuleConfig` hooks directly into the writer command array:

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
| **`COLLECT_SCATTER`** | `GameModeDirector` / `SlotTable` | `CollectionItemModuleConfig` | `{ totalWay, matrix, colIndex }` |
| **`COLLECTION_TARGET_REACHED`** | `GameModeDirector` / `SlotTable` | `CollectionItemModuleConfig` | `{ totalWay, matrix, colIndex }` |
