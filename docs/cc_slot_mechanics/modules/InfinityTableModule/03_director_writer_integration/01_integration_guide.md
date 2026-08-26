---
id: "cc_slot_mechanics:InfinityTableModule:integration:director"
title: "InfinityTableModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `InfinityTableModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `InfinityTableModule` hooks directly into the writer command array:

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
| **`INFINITY_ADD_REEL`** | `GameModeDirector` / `SlotTable` | `InfinityTableModule` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_EXPAND_COMPLETE`** | `GameModeDirector` / `SlotTable` | `InfinityTableModule` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_RESET`** | `GameModeDirector` / `SlotTable` | `InfinityTableModule` | `{ totalWay, matrix, colIndex }` |
