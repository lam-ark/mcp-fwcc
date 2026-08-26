---
id: "cc_slot_mechanics:MultiplierData:integration:director"
title: "MultiplierData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MultiplierData", "multiplier_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MultiplierData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MultiplierData` hooks directly into the writer command array:

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
| **`APPLY_MULTIPLIER_TO_WIN_AMOUNT`** | `GameModeDirector` / `SlotTable` | `MultiplierData` | `{ totalWay, matrix, colIndex }` |
| **`RESET_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierData` | `{ totalWay, matrix, colIndex }` |
| **`SYNC_GAME_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierData` | `{ totalWay, matrix, colIndex }` |
