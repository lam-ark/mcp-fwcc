---
id: "cc_slot_mechanics:HorizontalReelModule:integration:director"
title: "HorizontalReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalReelModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalReelModule` hooks directly into the writer command array:

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
| **`TABLE_STOP_SPIN_TOP`** | `GameModeDirector` / `SlotTable` | `HorizontalReelModule` | `{ totalWay, matrix, colIndex }` |
| **`STACK_WILD_LANDED`** | `GameModeDirector` / `SlotTable` | `HorizontalReelModule` | `{ totalWay, matrix, colIndex }` |
| **`HORIZONTAL_REEL_STOP`** | `GameModeDirector` / `SlotTable` | `HorizontalReelModule` | `{ totalWay, matrix, colIndex }` |
