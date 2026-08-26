---
id: "cc_slot_mechanics:SlotCellTableModule:integration:director"
title: "SlotCellTableModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `SlotCellTableModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `SlotCellTableModule` hooks directly into the writer command array:

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
| **`CELL_START_SPIN`** | `GameModeDirector` / `SlotTable` | `SlotCellTableModule` | `{ totalWay, matrix, colIndex }` |
| **`CELL_STOP_SPIN`** | `GameModeDirector` / `SlotTable` | `SlotCellTableModule` | `{ totalWay, matrix, colIndex }` |
| **`CELL_BOUNCE_SETTLE`** | `GameModeDirector` / `SlotTable` | `SlotCellTableModule` | `{ totalWay, matrix, colIndex }` |
