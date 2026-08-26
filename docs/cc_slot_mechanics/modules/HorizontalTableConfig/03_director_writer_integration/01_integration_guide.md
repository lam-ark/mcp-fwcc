---
id: "cc_slot_mechanics:HorizontalTableConfig:integration:director"
title: "HorizontalTableConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalTableConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalTableConfig` hooks directly into the writer command array:

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
| **`TABLE_STOP_SPIN_TOP`** | `GameModeDirector` / `SlotTable` | `HorizontalTableConfig` | `{ totalWay, matrix, colIndex }` |
| **`STACK_WILD_LANDED`** | `GameModeDirector` / `SlotTable` | `HorizontalTableConfig` | `{ totalWay, matrix, colIndex }` |
| **`HORIZONTAL_REEL_STOP`** | `GameModeDirector` / `SlotTable` | `HorizontalTableConfig` | `{ totalWay, matrix, colIndex }` |
