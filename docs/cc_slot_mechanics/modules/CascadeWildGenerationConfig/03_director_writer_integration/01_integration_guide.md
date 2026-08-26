---
id: "cc_slot_mechanics:CascadeWildGenerationConfig:integration:director"
title: "CascadeWildGenerationConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationConfig", "cascade_wild_generation_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CascadeWildGenerationConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CascadeWildGenerationConfig` hooks directly into the writer command array:

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
| **`SPAWN_CASCADE_WILD`** | `GameModeDirector` / `SlotTable` | `CascadeWildGenerationConfig` | `{ totalWay, matrix, colIndex }` |
| **`WILD_BURST_ANIMATION`** | `GameModeDirector` / `SlotTable` | `CascadeWildGenerationConfig` | `{ totalWay, matrix, colIndex }` |
