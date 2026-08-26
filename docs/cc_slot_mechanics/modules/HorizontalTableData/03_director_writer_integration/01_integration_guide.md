---
id: "cc_slot_mechanics:HorizontalTableData:integration:director"
title: "HorizontalTableData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalTableData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalTableData` hooks directly into the writer command array:

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
| **`TABLE_STOP_SPIN_TOP`** | `GameModeDirector` / `SlotTable` | `HorizontalTableData` | `{ totalWay, matrix, colIndex }` |
| **`STACK_WILD_LANDED`** | `GameModeDirector` / `SlotTable` | `HorizontalTableData` | `{ totalWay, matrix, colIndex }` |
| **`HORIZONTAL_REEL_STOP`** | `GameModeDirector` / `SlotTable` | `HorizontalTableData` | `{ totalWay, matrix, colIndex }` |
