---
id: "cc_slot_mechanics:InfinityTableConfig:integration:director"
title: "InfinityTableConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["InfinityTableConfig", "infinity_table_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `InfinityTableConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `InfinityTableConfig` hooks directly into the writer command array:

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
| **`INFINITY_ADD_REEL`** | `GameModeDirector` / `SlotTable` | `InfinityTableConfig` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_EXPAND_COMPLETE`** | `GameModeDirector` / `SlotTable` | `InfinityTableConfig` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_RESET`** | `GameModeDirector` / `SlotTable` | `InfinityTableConfig` | `{ totalWay, matrix, colIndex }` |
