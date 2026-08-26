---
id: "cc_slot_mechanics:TableGigabloxConfig:integration:director"
title: "TableGigabloxConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TableGigabloxConfig", "table_gigablox_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TableGigabloxConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TableGigabloxConfig` hooks directly into the writer command array:

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
| **`GIGABLOX_MERGE_START`** | `GameModeDirector` / `SlotTable` | `TableGigabloxConfig` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_SPIN_SYNC`** | `GameModeDirector` / `SlotTable` | `TableGigabloxConfig` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_LANDED`** | `GameModeDirector` / `SlotTable` | `TableGigabloxConfig` | `{ totalWay, matrix, colIndex }` |
