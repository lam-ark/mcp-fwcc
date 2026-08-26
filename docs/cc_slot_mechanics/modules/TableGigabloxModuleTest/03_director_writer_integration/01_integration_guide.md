---
id: "cc_slot_mechanics:TableGigabloxModuleTest:integration:director"
title: "TableGigabloxModuleTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TableGigabloxModuleTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TableGigabloxModuleTest` hooks directly into the writer command array:

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
| **`GIGABLOX_MERGE_START`** | `GameModeDirector` / `SlotTable` | `TableGigabloxModuleTest` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_SPIN_SYNC`** | `GameModeDirector` / `SlotTable` | `TableGigabloxModuleTest` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_LANDED`** | `GameModeDirector` / `SlotTable` | `TableGigabloxModuleTest` | `{ totalWay, matrix, colIndex }` |
