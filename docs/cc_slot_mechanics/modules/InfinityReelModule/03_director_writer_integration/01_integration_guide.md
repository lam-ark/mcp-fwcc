---
id: "cc_slot_mechanics:InfinityReelModule:integration:director"
title: "InfinityReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `InfinityReelModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `InfinityReelModule` hooks directly into the writer command array:

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
| **`INFINITY_ADD_REEL`** | `GameModeDirector` / `SlotTable` | `InfinityReelModule` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_EXPAND_COMPLETE`** | `GameModeDirector` / `SlotTable` | `InfinityReelModule` | `{ totalWay, matrix, colIndex }` |
| **`INFINITY_RESET`** | `GameModeDirector` / `SlotTable` | `InfinityReelModule` | `{ totalWay, matrix, colIndex }` |
