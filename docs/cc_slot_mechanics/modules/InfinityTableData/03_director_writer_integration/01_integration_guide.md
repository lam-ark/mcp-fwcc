---
id: "cc_slot_mechanics:InfinityTableData:integration:director"
title: "InfinityTableData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["InfinityTableData", "infinity_table_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `InfinityTableData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `InfinityTableData` hooks directly into the writer command array:

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
| **`INFINITY_ADD_REEL`** | `GameModeDirector` / `SlotTable` | `InfinityTableData` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_EXPAND_COMPLETE`** | `GameModeDirector` / `SlotTable` | `InfinityTableData` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_RESET`** | `GameModeDirector` / `SlotTable` | `InfinityTableData` | `{ totalWay, matrix, colIndex }` |
