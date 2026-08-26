---
id: "cc_slot_mechanics:TableModuleConfigTest:integration:director"
title: "TableModuleConfigTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TableModuleConfigTest", "table_module_config_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TableModuleConfigTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TableModuleConfigTest` hooks directly into the writer command array:

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
| **`SPAWN_CASCADE_WILD`** | `GameModeDirector` / `SlotTable` | `TableModuleConfigTest` | `{ totalWay, matrix, colIndex }` |
| **`WILD_BURST_ANIMATION`** | `GameModeDirector` / `SlotTable` | `TableModuleConfigTest` | `{ totalWay, matrix, colIndex }` |
