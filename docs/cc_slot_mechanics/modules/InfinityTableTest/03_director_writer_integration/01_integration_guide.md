---
id: "cc_slot_mechanics:InfinityTableTest:integration:director"
title: "InfinityTableTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `InfinityTableTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `InfinityTableTest` hooks directly into the writer command array:

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
| **`INFINITY_ADD_REEL`** | `GameModeDirector` / `SlotTable` | `InfinityTableTest` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_EXPAND_COMPLETE`** | `GameModeDirector` / `SlotTable` | `InfinityTableTest` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_RESET`** | `GameModeDirector` / `SlotTable` | `InfinityTableTest` | `{ totalWay, matrix, colIndex }` |
