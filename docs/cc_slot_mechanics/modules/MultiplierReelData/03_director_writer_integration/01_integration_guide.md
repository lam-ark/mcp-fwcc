---
id: "cc_slot_mechanics:MultiplierReelData:integration:director"
title: "MultiplierReelData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MultiplierReelData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MultiplierReelData` hooks directly into the writer command array:

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
| **`MULTIPLIER_REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MultiplierReelData` | `{ totalWay, matrix, colIndex }` |
| **`APPLY_REEL_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierReelData` | `{ totalWay, matrix, colIndex }` |
