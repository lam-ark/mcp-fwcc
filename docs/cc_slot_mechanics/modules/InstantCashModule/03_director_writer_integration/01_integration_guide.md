---
id: "cc_slot_mechanics:InstantCashModule:integration:director"
title: "InstantCashModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `InstantCashModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `InstantCashModule` hooks directly into the writer command array:

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
| **`INSTANT_CASH_COLLECTED`** | `GameModeDirector` / `SlotTable` | `InstantCashModule` | `{ totalWay, matrix, colIndex }` |
| **`RESET_RESPIN_COUNT`** | `GameModeDirector` / `SlotTable` | `InstantCashModule` | `{ totalWay, matrix, colIndex }` |
| **`SETTLE_JACKPOT_PRIZE`** | `GameModeDirector` / `SlotTable` | `InstantCashModule` | `{ totalWay, matrix, colIndex }` |
