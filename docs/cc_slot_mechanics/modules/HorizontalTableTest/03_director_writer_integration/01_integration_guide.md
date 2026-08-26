---
id: "cc_slot_mechanics:HorizontalTableTest:integration:director"
title: "HorizontalTableTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalTableTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalTableTest` hooks directly into the writer command array:

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
| **`TABLE_STOP_SPIN_TOP`** | `GameModeDirector` / `SlotTable` | `HorizontalTableTest` | `{ totalWay, matrix, colIndex }` |
| **`STACK_WILD_LANDED`** | `GameModeDirector` / `SlotTable` | `HorizontalTableTest` | `{ totalWay, matrix, colIndex }` |
| **`HORIZONTAL_REEL_STOP`** | `GameModeDirector` / `SlotTable` | `HorizontalTableTest` | `{ totalWay, matrix, colIndex }` |
