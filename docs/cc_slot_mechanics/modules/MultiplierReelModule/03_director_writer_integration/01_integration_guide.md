---
id: "cc_slot_mechanics:MultiplierReelModule:integration:director"
title: "MultiplierReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MultiplierReelModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MultiplierReelModule` hooks directly into the writer command array:

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
| **`MULTIPLIER_REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MultiplierReelModule` | `{ totalWay, matrix, colIndex }` |
| **`APPLY_REEL_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierReelModule` | `{ totalWay, matrix, colIndex }` |
