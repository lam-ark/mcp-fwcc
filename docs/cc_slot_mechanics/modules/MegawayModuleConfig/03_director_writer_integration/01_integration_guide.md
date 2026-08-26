---
id: "cc_slot_mechanics:MegawayModuleConfig:integration:director"
title: "MegawayModuleConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MegawayModuleConfig", "megaway_module_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MegawayModuleConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MegawayModuleConfig` hooks directly into the writer command array:

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
| **`UPDATE_MEGAWAY`** | `GameModeDirector` / `SlotTable` | `MegawayModuleConfig` | `{ totalWay, matrix, colIndex }` |
| **`REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MegawayModuleConfig` | `{ totalWay, matrix, colIndex }` |
| **`RESET_MEGAWAY`** | `GameModeDirector` / `SlotTable` | `MegawayModuleConfig` | `{ totalWay, matrix, colIndex }` |
