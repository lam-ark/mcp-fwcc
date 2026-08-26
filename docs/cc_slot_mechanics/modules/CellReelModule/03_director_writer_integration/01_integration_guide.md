---
id: "cc_slot_mechanics:CellReelModule:integration:director"
title: "CellReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CellReelModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CellReelModule` hooks directly into the writer command array:

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
| **`CELL_START_SPIN`** | `GameModeDirector` / `SlotTable` | `CellReelModule` | `{ totalWay, matrix, colIndex }` |
| **`CELL_STOP_SPIN`** | `GameModeDirector` / `SlotTable` | `CellReelModule` | `{ totalWay, matrix, colIndex }` |
| **`CELL_BOUNCE_SETTLE`** | `GameModeDirector` / `SlotTable` | `CellReelModule` | `{ totalWay, matrix, colIndex }` |
