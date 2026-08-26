---
id: "cc_slot_mechanics:InstantCashData:integration:director"
title: "InstantCashData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `InstantCashData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `InstantCashData` hooks directly into the writer command array:

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
| **`INSTANT_CASH_COLLECTED`** | `GameModeDirector` / `SlotTable` | `InstantCashData` | `{ totalWay, matrix, colIndex }` |
| **`RESET_RESPIN_COUNT`** | `GameModeDirector` / `SlotTable` | `InstantCashData` | `{ totalWay, matrix, colIndex }` |
| **`SETTLE_JACKPOT_PRIZE`** | `GameModeDirector` / `SlotTable` | `InstantCashData` | `{ totalWay, matrix, colIndex }` |
