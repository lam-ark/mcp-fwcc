---
id: "cc_slot_mechanics:TableGigabloxData:integration:director"
title: "TableGigabloxData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TableGigabloxData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TableGigabloxData` hooks directly into the writer command array:

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
| **`GIGABLOX_MERGE_START`** | `GameModeDirector` / `SlotTable` | `TableGigabloxData` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_SPIN_SYNC`** | `GameModeDirector` / `SlotTable` | `TableGigabloxData` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_LANDED`** | `GameModeDirector` / `SlotTable` | `TableGigabloxData` | `{ totalWay, matrix, colIndex }` |
