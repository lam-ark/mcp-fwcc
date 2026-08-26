---
id: "cc_slot_mechanics:MegawayData:integration:director"
title: "MegawayData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MegawayData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MegawayData` hooks directly into the writer command array:

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
| **`UPDATE_MEGAWAY`** | `GameModeDirector` / `SlotTable` | `MegawayData` | `{ totalWay, matrix, colIndex }` |
| **`REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MegawayData` | `{ totalWay, matrix, colIndex }` |
| **`RESET_MEGAWAY`** | `GameModeDirector` / `SlotTable` | `MegawayData` | `{ totalWay, matrix, colIndex }` |
