---
id: "cc_slot_mechanics:GigabloxReelModule:integration:director"
title: "GigabloxReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `GigabloxReelModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `GigabloxReelModule` hooks directly into the writer command array:

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
| **`GIGABLOX_MERGE_START`** | `GameModeDirector` / `SlotTable` | `GigabloxReelModule` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_SPIN_SYNC`** | `GameModeDirector` / `SlotTable` | `GigabloxReelModule` | `{ totalWay, matrix, colIndex }` |
| **`GIGABLOX_LANDED`** | `GameModeDirector` / `SlotTable` | `GigabloxReelModule` | `{ totalWay, matrix, colIndex }` |
