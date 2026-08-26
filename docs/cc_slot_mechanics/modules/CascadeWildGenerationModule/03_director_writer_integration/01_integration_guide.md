---
id: "cc_slot_mechanics:CascadeWildGenerationModule:integration:director"
title: "CascadeWildGenerationModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CascadeWildGenerationModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CascadeWildGenerationModule` hooks directly into the writer command array:

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
| **`SPAWN_CASCADE_WILD`** | `GameModeDirector` / `SlotTable` | `CascadeWildGenerationModule` | `{ totalWay, matrix, colIndex }` |
| **`WILD_BURST_ANIMATION`** | `GameModeDirector` / `SlotTable` | `CascadeWildGenerationModule` | `{ totalWay, matrix, colIndex }` |
