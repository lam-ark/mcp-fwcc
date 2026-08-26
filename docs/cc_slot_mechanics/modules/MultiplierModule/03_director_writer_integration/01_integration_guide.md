---
id: "cc_slot_mechanics:MultiplierModule:integration:director"
title: "MultiplierModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MultiplierModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MultiplierModule` hooks directly into the writer command array:

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
| **`APPLY_MULTIPLIER_TO_WIN_AMOUNT`** | `GameModeDirector` / `SlotTable` | `MultiplierModule` | `{ totalWay, matrix, colIndex }` |
| **`RESET_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierModule` | `{ totalWay, matrix, colIndex }` |
| **`SYNC_GAME_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierModule` | `{ totalWay, matrix, colIndex }` |
