---
id: "cc_slot_mechanics:HorizontalTableModule:integration:director"
title: "HorizontalTableModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalTableModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalTableModule` hooks directly into the writer command array:

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
| **`TABLE_STOP_SPIN_TOP`** | `GameModeDirector` / `SlotTable` | `HorizontalTableModule` | `{ totalWay, matrix, colIndex }` |
| **`STACK_WILD_LANDED`** | `GameModeDirector` / `SlotTable` | `HorizontalTableModule` | `{ totalWay, matrix, colIndex }` |
| **`HORIZONTAL_REEL_STOP`** | `GameModeDirector` / `SlotTable` | `HorizontalTableModule` | `{ totalWay, matrix, colIndex }` |
