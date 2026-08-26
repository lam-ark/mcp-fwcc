---
id: "cc_slot_mechanics:MultiplierReel:integration:director"
title: "MultiplierReel Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MultiplierReel` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MultiplierReel` hooks directly into the writer command array:

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
| **`MULTIPLIER_REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MultiplierReel` | `{ totalWay, matrix, colIndex }` |
| **`APPLY_REEL_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierReel` | `{ totalWay, matrix, colIndex }` |
