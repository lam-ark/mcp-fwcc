---
id: "cc_slot_mechanics:TableGigabloxModule:integration:director"
title: "TableGigabloxModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TableGigabloxModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TableGigabloxModule` hooks directly into the writer command array:

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
| **`GIGABLOX_MERGE_START`** | `GameModeDirector` / `SlotTable` | `TableGigabloxModule` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_SPIN_SYNC`** | `GameModeDirector` / `SlotTable` | `TableGigabloxModule` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_LANDED`** | `GameModeDirector` / `SlotTable` | `TableGigabloxModule` | `{ totalWay, matrix, colIndex }` |
