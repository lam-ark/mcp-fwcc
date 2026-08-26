---
id: "cc_slot_mechanics:CellTableConfig:integration:director"
title: "CellTableConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CellTableConfig", "cell_table_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CellTableConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CellTableConfig` hooks directly into the writer command array:

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
| **`CELL_START_SPIN`** | `GameModeDirector` / `SlotTable` | `CellTableConfig` | `{ totalWay, matrix, colIndex }` |
| **`CELL_STOP_SPIN`** | `GameModeDirector` / `SlotTable` | `CellTableConfig` | `{ totalWay, matrix, colIndex }` |
| **`CELL_BOUNCE_SETTLE`** | `GameModeDirector` / `SlotTable` | `CellTableConfig` | `{ totalWay, matrix, colIndex }` |
