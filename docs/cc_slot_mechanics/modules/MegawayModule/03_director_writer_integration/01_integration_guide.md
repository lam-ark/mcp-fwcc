---
id: "cc_slot_mechanics:MegawayModule:integration:director"
title: "MegawayModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MegawayModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MegawayModule` hooks directly into the writer command array:

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
| **`UPDATE_MEGAWAY`** | `GameModeDirector` / `SlotTable` | `MegawayModule` | `{ totalWay, matrix, colIndex }` |
| **`REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MegawayModule` | `{ totalWay, matrix, colIndex }` |
| **`RESET_MEGAWAY`** | `GameModeDirector` / `SlotTable` | `MegawayModule` | `{ totalWay, matrix, colIndex }` |
