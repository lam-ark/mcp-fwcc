---
id: "cc_slot_mechanics:MultiplierReelConfig:integration:director"
title: "MultiplierReelConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MultiplierReelConfig", "multiplier_reel_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MultiplierReelConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MultiplierReelConfig` hooks directly into the writer command array:

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
| **`MULTIPLIER_REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MultiplierReelConfig` | `{ totalWay, matrix, colIndex }` |
| **`APPLY_REEL_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierReelConfig` | `{ totalWay, matrix, colIndex }` |
